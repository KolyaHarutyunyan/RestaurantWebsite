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
    };
    return sanitized;
  }

  sanitizeMany(categories: ICategory[]): CategoryDTO[] {
    const sanitized: CategoryDTO[] = [];
    for (let i = 0; i < categories.length; i++) {
      sanitized.push(this.sanitize(categories[i]));
    }
    return sanitized;
  }

  /** Sanitize the items in the category */
  sanitizeItems(category: ICategory): CategoryItemsDTO {
    const items = category.items;
    // console.log(category);

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
}
