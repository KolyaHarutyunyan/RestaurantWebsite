import { Injectable } from '@nestjs/common';
import {
  AVATAR_FOLDER,
  EVENT_FOLDER,
  QR_FOLDER,
  business_FOLDER,
} from './constants';
import { ImageStorage } from './image.storage';
import * as sharp from 'sharp';
import { EventImageDTO } from './dto';
import * as fs from 'fs';
@Injectable()
export class ImageService {
  constructor(private readonly storage: ImageStorage) {}

  saveAvatarImage = async (file): Promise<string> => {
    return await this.storage.storeImage(file, AVATAR_FOLDER);
  };
  savebusinessLogoImage = async (file): Promise<string> => {
    return await this.storage.storeImage(file, business_FOLDER);
  };
  saveQRImage = async (file): Promise<any> => {
    var datas: any = {};
    const readFile = fs.readFileSync(file);
    datas.buffer = readFile;
    datas.mimetype = 'image/png';
    datas.originalname = 'qrCode.png';
    return await this.storage.storeImage(datas, QR_FOLDER);
  };
  /** if the file is attached, it saves the file for the event and returns the image object */
  saveEventImage = async (file): Promise<EventImageDTO> => {
    if (!file) {
      return null;
    }
    const thumbnailBuffer = await sharp(file.buffer)
      .resize({ width: 200, height: 200, fit: 'cover' })
      .toBuffer();
    const thumbnailfile = {
      originalname: 'thumbnail_' + file.originalname,
      mimetype: file.mimetype,
      buffer: thumbnailBuffer,
    };
    const [imageUrl, thumbnailUrl] = await Promise.all([
      this.storage.storeImage(file, EVENT_FOLDER),
      this.storage.storeImage(thumbnailfile, EVENT_FOLDER),
    ]);
    return {
      imageUrl,
      thumbnailUrl,
    };
  };

  /** NOT USER: saves multiple images for the event */
  saveEventImages = async (files) => {
    try {
      const urls = await Promise.all(
        files.map((file: any) => this.storage.storeImage(file, EVENT_FOLDER)),
      );
      return urls;
    } catch (err) {
      throw err;
    }
  };

  deleteImages = async (files: string[]) => {
    return await this.storage.deleteImages(files);
  };
}
