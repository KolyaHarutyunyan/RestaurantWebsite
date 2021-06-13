import { Injectable } from '@nestjs/common';
import { IItem, ItemDTO, ItemSanitizer } from 'src/item';
import { ISanitize } from 'src/util';
import { CategoryRO } from '../dto';
import { ICategory } from '../interface';

@Injectable()
export class CategorySanitizer implements ISanitize {
  constructor(private readonly itemSanitizer: ItemSanitizer) {}
  sanitize(category: ICategory): CategoryRO {
    const sanitized: CategoryRO = {
      id: category._id,
      name: category.name,
      type: category.type,
    };
    sanitized.items = this.processItems(category.items);
    return sanitized;
  }

  //   /** Private methods */
  private processItems(items: IItem[] | string[]): string[] | ItemDTO[] {
    if (items?.length > 0) {
      const item = items[0] as IItem;
      if (item.name) {
        //this means the items are populated
        return this.itemSanitizer.sanitizeMany(items as IItem[]);
      } else {
        //items were not populated
        return items as string[];
      }
    }
  }
}
