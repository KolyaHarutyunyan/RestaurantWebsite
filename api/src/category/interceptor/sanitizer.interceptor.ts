import { Injectable } from '@nestjs/common';
import { IItem, ItemSanitizer } from '../../item';
import { ISanitize } from '../../util';
import { CategoryDTO } from '../dto';
import { CategoryItemsDTO } from '../dto/categoryItems.dto';
import { ICategory } from '../interface';

@Injectable()
export class CategorySanitizer implements ISanitize {
  constructor(private readonly itemSanitizer: ItemSanitizer) {}
  sanitize(category: ICategory): CategoryDTO {
    const sanitized: CategoryDTO = {
      id: category._id,
      name: category.name,
      type: category.type,
    };
    return sanitized;
  }

  /** Sanitize the items in the category */
  sanitizeItems(category: ICategory): CategoryItemsDTO {
    const items = category.items;
    const response: CategoryItemsDTO = { id: category._id, items: [] };
    if (items?.length < 1) {
      return response;
    }
    for (let i = 0; i < items.length; i++) {
      response.items.push({
        rank: items[i].rank,
        item: this.itemSanitizer.sanitize(items[i]._id as IItem),
      });
    }
    return response;
  }

  //   /** Private methods */
  //   private processItems(items: ICategoryItem[]) {
  //     if (items?.length > 0) {
  //       const itemTest = items[0]._id as IItem;
  //       if (itemTest.name) {
  //         for (let i = 0; i < items.length; i++) {
  //           items[i].item = this.itemSanitizer.sanitize(items[i]._id as IItem);
  //         }
  //       }
  //     }
  //   }
}
