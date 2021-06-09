import { Injectable } from '@nestjs/common';
import { IImage, ImageSanitizer } from 'src/image';
import { IMenu } from 'src/menu/interface';
import { ISanitize } from 'src/util';
import { MenuDTO } from '../dto';

@Injectable()
export class MenuSanitizer implements ISanitize {
  constructor(private readonly imageSanitizer: ImageSanitizer) {}
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
}
