import { ISanitize } from '../../util';
import { ItemDTO } from '../dto';
import { IItem } from '../interface';

export class ItemSanitizer implements ISanitize {
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
    return sanitizedItem;
  }

  sanitizeMany(items: IItem[]): ItemDTO[] {
    const sanitizedItems: ItemDTO[] = [];
    for (let i = 0; i < items.length; i++) {
      sanitizedItems.push(this.sanitize(items[i]));
    }
    return sanitizedItems;
  }
}
