import { Injectable } from '@nestjs/common';
import { IMenu, IMenuCategory } from './interface';
import { ISanitize } from '../util';
import { MenuDTO } from './dto';
import { CategoryDTO } from './dto/menu.dto';
import { ItemSanitizer } from 'src/item/item.sanitizer';
import { IItem, ItemDTO } from 'src/item';
import { IMenuItem } from './interface/menu.interface';

@Injectable()
export class MenuSanitizer implements ISanitize {
  constructor(private readonly itemSanitizer: ItemSanitizer) {}
  /** Sanitizes a menu by turning IMenu instance to MenuDTO */
  sanitize(menu: IMenu): MenuDTO {
    const sanitizedMenu: MenuDTO = {
      id: menu._id,
      name: menu.name,
      tagline: menu.tagline,
      description: menu.description,
      isActive: menu.isActive,
      image: menu.image,
      food: this.sanitizeCategories(menu.food),
      drinks: this.sanitizeCategories(menu.drinks),
    };
    return sanitizedMenu;
  }

  /** @param - menus (IMenu array). @returns sanitized menus as MenuDTO array */
  sanitizeMany(menus: IMenu[]): MenuDTO[] {
    const sanitizedMenus: MenuDTO[] = [];
    for (let i = 0; i < menus.length; i++) {
      sanitizedMenus.push(this.sanitize(menus[i]));
    }
    return sanitizedMenus;
  }

  /** cleans a list of categories and returns it */
  private sanitizeCategories(categories: IMenuCategory[]): CategoryDTO[] {
    const sanitized: CategoryDTO[] = [];
    let items: IMenuItem[];
    let sanitizedItems: ItemDTO[];
    //take each category, and sanitize its inner items from the items list=
    for (let i = 0; i < categories.length; i++) {
      items = categories[i].items;
      sanitizedItems = [];
      for (let j = 0; j < items.length; j++) {
        const item = items[j].item as IItem;
        if (item.name) {
          sanitizedItems.push(this.itemSanitizer.sanitize(item));
        }
      }
      sanitized.push({ name: categories[i].name, items: sanitizedItems });
    }
    return sanitized;
  }
}
