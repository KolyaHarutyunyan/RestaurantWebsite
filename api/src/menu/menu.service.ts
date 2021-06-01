import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { MenuModel } from './menu.model';
import { ImageService } from '../image';
import { IMenu } from './interface';
import { MenuSanitizer } from './interceptor/sanitizer.interceptor';
import { CreateMenuDTO } from './dto';
import { BusinessValidator } from 'src/business';

@Injectable()
export class MenuService {
  constructor(
    private readonly imageService: ImageService,
    private readonly sanitizer: MenuSanitizer,
    private readonly businessValidator: BusinessValidator,
  ) {
    this.model = MenuModel;
    // this.businessModel = businessModel;
  }
  private model: Model<IMenu>;
  //   private businessModel: Model<Ibusiness>;

  /** Create menu */
  create = async (menuDTO: CreateMenuDTO) => {
    // check if the correct user is creating a business
    this.businessValidator.validateBusiness(menuDTO.userId, menuDTO.businessId);
    let menu = new this.model({
      businessId: menuDTO.businessId,
      name: menuDTO.name,
      isActive: false,
      foodCategories: [],
      drinkCategories: [],
    });
    if (menuDTO.description) {
      menu.description = menuDTO.description;
    }
    if (menuDTO.menuImage) {
      menu.imageUrl = await this.imageService.saveFile(menuDTO.menuImage);
    }
    menu = await menu.save();
    return this.sanitizer.sanitize(menu);
  };
}
