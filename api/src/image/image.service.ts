import { Injectable } from '@nestjs/common';
import { ImageStorage } from './image.storage';
import * as fs from 'fs';
import * as qrcode from 'qrcode';
import * as path from 'path';
import * as sharp from 'sharp';
import { IImage } from './interface';

@Injectable()
export class ImageService {
  constructor(private readonly storage: ImageStorage) {}

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

  /** Saves a file and its thumbnail version */
  saveWithThumb = async (file): Promise<IImage> => {
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
  deleteImages = async (files: string[]) => {
    if (!files || files.length < 0) return null;
    return await this.storage.deleteImages(files);
  };
}
