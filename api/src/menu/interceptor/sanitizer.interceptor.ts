import { Injectable } from '@nestjs/common';
import { IMenu } from 'src/menu/interface';
import { ISanitize } from 'src/util';
import { MenuDTO } from '../dto';

@Injectable()
export class MenuSanitizer implements ISanitize {
  sanitize(menu: IMenu) {
    const sanitizedMenu: MenuDTO = {
      id: menu._id,
      name: menu.name,
      tagline: menu.tagline,
      description: menu.description,
      imageUrl: menu.imageUrl,
      isActive: menu.isActive,
    };
    return sanitizedMenu;
  }
}
