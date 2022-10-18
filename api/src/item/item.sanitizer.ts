import { Injectable } from '@nestjs/common';
import { ISanitize } from '../util';
import { IItem } from './interface';
import { ItemDTO } from './dto';

@Injectable()
export class ItemSanitizer implements ISanitize {
  sanitize(item: IItem): ItemDTO {
    const sanitizedItem: ItemDTO = {
      id: item.id,
      name: item.name,
      price: item.price,
      description: item.description,
      option: item.option,
      mainImage: item.mainImage,
      images: item.images,
      active: item.active,
    };
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
