import { Injectable } from '@nestjs/common';
import { CategoryType, ICategory } from '../../category';
import { IImage, ImageSanitizer } from '../../image';
import { IMenu, IMenuCategory } from '../interface';
import { ISanitize } from '../../util';
import { MenuCategoriesDTO, MenuDTO } from '../dto';
import { CategorySanitizer } from '../../category';
import { MenuCategoryDTO } from '../dto/menuCategory.dto';

@Injectable()
export class MenuSanitizer implements ISanitize {
  constructor(
    private readonly imageSanitizer: ImageSanitizer,
    private readonly categorySanitizer: CategorySanitizer,
  ) {}
  /** Sanitizes a menu by turning IMenu instance to MenuDTO */
  sanitize(menu: IMenu): MenuDTO {
    const sanitizedMenu: MenuDTO = {
      id: menu._id,
      name: menu.name,
      tagline: menu.tagline,
      description: menu.description,
      isActive: menu.isActive,
    };
    if (menu.image) {
      sanitizedMenu.image = this.imageSanitizer.sanitize(menu.image as IImage);
    }
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
    const categories = menu.categories as IMenuCategory[];
    let category: ICategory;
    let menuCategoryRO: MenuCategoryDTO;
    const drinks: MenuCategoryDTO[] = [];
    const food: MenuCategoryDTO[] = [];
    for (let i = 0; i < categories.length; i++) {
      category = categories[i]._id as ICategory;
      menuCategoryRO = {
        rank: categories[i].rank,
        category: this.categorySanitizer.sanitize(category),
      };
      if (category.type === CategoryType.DRINK) {
        drinks.push(menuCategoryRO);
      } else if (category.type === CategoryType.FOOD) {
        food.push(menuCategoryRO);
      }
    }
    const response: MenuCategoriesDTO = {
      id: menu._id,
      food: food,
      drink: drinks,
    };
    return response;
  }
}
