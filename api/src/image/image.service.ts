import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ImageStorage } from './image.storage';
import * as fs from 'fs';
import * as qrcode from 'qrcode';
import * as path from 'path';
import * as sharp from 'sharp';
import { IImage, IUpload } from './interface';
import { ImageModel } from './image.model';
import { Model } from 'mongoose';

@Injectable()
export class ImageService {
  constructor(private readonly storage: ImageStorage) {
    this.model = ImageModel;
  }

  private model: Model<IImage>;

  /** Create an image */
  async add(file: any, uploader: string) {
    this.checkFile(file);
    const url = await this.saveFile(file);
    console.log('URL IS ', url);
    const image = await new this.model({
      uploader: uploader,
      originalUrl: url,
    }).save();
    return image._id;
  }

  /** Create an image with thumb */
  async addWithThumb(file: any, uploader: string): Promise<string> {
    this.checkFile(file);
    const urls = await this.saveWithThumb(file);
    const image = await new this.model({
      uploader: uploader,
      originalUrl: urls.originalUrl,
      thumbUrl: urls.thumbUrl,
    }).save();
    return image._id;
  }

  /** Save many images */
  async addMany(files: any[], uploader: string): Promise<string[]> {
    const urls = await this.saveFiles(files);
    console.log('URLs ARE ', urls);

    const promises = [];
    let image: IImage;
    for (let i = 0; i < urls.length; i++) {
      image = new this.model({
        uploader: uploader,
        originalUrl: urls[i],
      });
      promises.push(image.save());
    }
    const images = await Promise.all(promises);
    const ids: string[] = [];
    for (let i = 0; i < images.length; i++) {
      ids.push(images[i]._id);
    }
    return ids;
  }

  // async AddManyWithThumb() {}

  async removeMany(fileIds: any[], uploader: string): Promise<number> {
    const images = await this.model.find({
      _id: { $in: fileIds },
    });
    const deleteUrls: string[] = [];
    for (let i = 0; i < images.length; i++) {
      this.checkOwnership(images[i], uploader);
      deleteUrls.push(images[i].originalUrl);
    }
    await this.storage.deleteImages(deleteUrls);
    const response = await this.model.deleteMany({
      uploader: uploader,
      _id: { $in: fileIds },
    });
    return response.n;
  }

  /** Generates a qr code file based on a url, stores in in S3 and @returns the urls of the stored file */
  generateQRCode = async (encodingURL: string) => {
    await qrcode.toFile(path.join(__dirname, '/qrCode.png'), encodingURL);
    const fileBuffer = fs.readFileSync(path.join(__dirname, '/qrCode.png'));
    const file = {
      buffer: fileBuffer,
      mimetype: 'image/png',
      originalname: Date.now() + '/qrcode.png',
    };
    const imageUrl = await this.storage.storeImage(file);
    return imageUrl;
  };

  /** Saves a file to the S3 and @returns the url */
  saveFile = async (file): Promise<string> => {
    if (!file) return null;
    return await this.storage.storeImage(file);
  };

  /** Save multiple file */
  saveFiles = async (files: any[]): Promise<string[]> => {
    if (!files || files.length < 1) {
      throw new HttpException('No files were detected', HttpStatus.BAD_REQUEST);
    }
    const promises = [];
    for (let i = 0; i < files.length; i++) {
      promises.push(this.storage.storeImage(files[i]));
    }
    const urls = await Promise.all(promises);
    return urls;
  };

  /** Saves a file and its thumbnail version */
  saveWithThumb = async (file): Promise<IUpload> => {
    if (!file) return null;
    const thumbnailBuffer = await sharp(file.buffer)
      .resize({ width: 200, height: 200, fit: 'cover' })
      .toBuffer();
    // file.originalname = file.originalname;
    const thumbnailfile = {
      originalname: 'thumbnail_' + file.originalname,
      mimetype: file.mimetype,
      buffer: thumbnailBuffer,
    };
    const [originalUrl, thumbUrl] = await Promise.all([
      this.storage.storeImage(file),
      this.storage.storeImage(thumbnailfile),
    ]);
    return {
      originalUrl,
      thumbUrl,
    };
  };

  /** Deletes an image from the S3 */
  deleteImages = async (urls: string[]) => {
    if (!urls || urls.length < 0) return null;
    return await this.storage.deleteImages(urls);
  };

  /** Private Methods */
  private checkFile(file) {
    if (!file) {
      throw new HttpException('file was not found', HttpStatus.BAD_REQUEST);
    }
  }

  /** Checking if the image is owned by the action requester */
  private checkOwnership(image: IImage, ownerId: string) {
    if (image.uploader != ownerId) {
      throw new HttpException(
        'One or more images was not uploaded by this account',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}
