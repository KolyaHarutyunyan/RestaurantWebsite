import { Injectable } from '@nestjs/common';
import { IItem, ItemSanitizer } from '../../item';
import { ISanitize } from '../../util';
import { CategoryRO } from '../dto';
import { ICategory, ICategoryItem } from '../interface';

@Injectable()
export class CategorySanitizer implements ISanitize {
  constructor(private readonly itemSanitizer: ItemSanitizer) {}
  sanitize(category: ICategory): CategoryRO {
    const sanitized: CategoryRO = {
      id: category._id,
      name: category.name,
      type: category.type,
    };
    this.processItems(category.items);
    return sanitized;
  }

  /** Private methods */
  private processItems(items: ICategoryItem[]) {
    if (items?.length > 0) {
      const itemTest = items[0]._id as IItem;
      if (itemTest.name) {
        for (let i = 0; i < items.length; i++) {
          items[i].item = this.itemSanitizer.sanitize(items[i]._id as IItem);
        }
      }
    }
  }
}
