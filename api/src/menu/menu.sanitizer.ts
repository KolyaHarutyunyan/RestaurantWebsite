import { Injectable } from '@nestjs/common';
import { ICategory } from '../category';
import { IMenu, IMenuCategory } from './interface';
import { ISanitize } from '../util';
import { MenuCategoriesDTO, MenuDTO, MenuCategoryDTO } from './dto';
import { CategorySanitizer } from '../category/category.sanitizer';

@Injectable()
export class MenuSanitizer implements ISanitize {
  constructor(private readonly categorySanitizer: CategorySanitizer) {}
  /** Sanitizes a menu by turning IMenu instance to MenuDTO */
  sanitize(menu: IMenu): MenuDTO {
    const sanitizedMenu: MenuDTO = {
      id: menu._id,
      name: menu.name,
      tagline: menu.tagline,
      description: menu.description,
      isActive: menu.isActive,
      image: menu.image,
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

  /** SanitizeCategories */
  sanitizeCategories(menu: IMenu): MenuCategoriesDTO {
    const response: MenuCategoriesDTO = {
      id: menu._id,
      food: this.cleanCategory(menu.foodCategories as IMenuCategory[]),
      drink: this.cleanCategory(menu.drinkCategories as IMenuCategory[]),
    };
    return response;
  }

  /** cleans a list of categories and returns it */
  private cleanCategory(categories: IMenuCategory[]): MenuCategoryDTO[] {
    const cleaned: MenuCategoryDTO[] = [];
    let menuCategoryRO: MenuCategoryDTO;
    let category: ICategory;
    for (let i = 0; i < categories.length; i++) {
      category = categories[i]._id as ICategory;
      menuCategoryRO = {
        rank: categories[i].rank,
        category: this.categorySanitizer.sanitize(category),
      };
      cleaned.push(menuCategoryRO);
    }
    return cleaned;
  }
}
