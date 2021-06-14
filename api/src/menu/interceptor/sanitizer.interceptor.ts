import { Injectable } from '@nestjs/common';
import { CategoryType, ICategory } from '../../category';
import { IImage, ImageSanitizer } from '../../image';
import { IMenu, IMenuCategory } from '../interface';
import { ISanitize } from '../../util';
import { MenuDTO } from '../dto';
import { CategorySanitizer } from 'src/category/interceptor/sanitizer.interceptor';
import { MenuCategoryRO } from '../dto/menuCategory.ro';

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
      foodCategories: [],
      drinkCategories: [],
    };
    //clean and prepare the categories
    this.processCategories(menu.categories as IMenuCategory[], sanitizedMenu);
    //clean and process the images
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

  /** clean and attach categories, @assumes the categories are in the correct order */
  private processCategories(
    categories: IMenuCategory[],
    sanitizedMenu: MenuDTO,
  ) {
    let category: ICategory;
    let menuCategoryRO: MenuCategoryRO;
    for (let i = 0; i < categories.length; i++) {
      category = categories[i]._id as ICategory;
      menuCategoryRO = {
        rank: categories[i].rank,
        id: category._id,
        name: category.name,
        description: category.description,
        type: category.type,
      };
      if (category.type === CategoryType.DRINK) {
        sanitizedMenu.drinkCategories.push(menuCategoryRO);
      } else if (category.type === CategoryType.FOOD) {
        sanitizedMenu.foodCategories.push(menuCategoryRO);
      }
    }
  }
}
