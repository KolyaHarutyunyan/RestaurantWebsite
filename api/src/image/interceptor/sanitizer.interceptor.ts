import { Injectable } from '@nestjs/common';
import { ISanitize } from '../../util';
import { ImageDTO } from '../dto';
import { IImage } from '../interface';

@Injectable()
export class ImageSanitizer implements ISanitize {
  /** Sanitize one image */
  sanitize(image: IImage): ImageDTO {
    return {
      id: image._id,
      originalUrl: image.originalUrl,
    };
  }

  /** Sanitize many images */
  sanitizeMany(images: IImage[]): ImageDTO[] {
    const sanitizedImages: ImageDTO[] = [];
    for (let i = 0; i < images.length; i++) {
      sanitizedImages.push({
        id: images[i]._id,
        originalUrl: images[i].originalUrl,
      });
    }
    return sanitizedImages;
  }
}
