import { ISanitize } from '../../util';
import { ItemDTO } from '../dto';
import { IItem } from '../interface';
import { IImage, ImageSanitizer } from '../../image';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemSanitizer implements ISanitize {
  constructor(private readonly imgSanitizer: ImageSanitizer) {}

  sanitize(item: IItem): ItemDTO {
    const sanitizedItem: ItemDTO = {
      id: item.id,
      name: item.name,
      price: item.price,
    };
    if (item.description) {
      sanitizedItem.description = item.description;
    }
    if (item.option) {
      sanitizedItem.option = item.option;
    }
    if (item.mainImage) {
      sanitizedItem.mainImage = this.imgSanitizer.sanitize(item.mainImage as IImage);
    }
    if (item.images && item.images.length > 0) {
      sanitizedItem.images = this.imgSanitizer.sanitizeMany(item.images as IImage[]);
    }
    return sanitizedItem;
  }

  // Sanitize manu
  sanitizeMany(items: IItem[]): ItemDTO[] {
    const sanitizedItems: ItemDTO[] = [];
    for (let i = 0; i < items.length; i++) {
      sanitizedItems.push(this.sanitize(items[i]));
    }
    return sanitizedItems;
  }
}
