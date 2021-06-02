import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { MenuModel } from './menu.model';
import { ImageService } from '../image';
import { IMenu } from './interface';
import { MenuSanitizer } from './interceptor/sanitizer.interceptor';
import { CreateMenuDTO, MenuDTO, UpdateMenuDTO } from './dto';
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
  create = async (menuDTO: CreateMenuDTO): Promise<MenuDTO> => {
    // check if the correct user is creating a business
    await this.businessValidator.validateBusiness(
      menuDTO.userId,
      menuDTO.businessId,
    );
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

  /** Update the menu fields */
  edit = async (menuId: string, updateDTO: UpdateMenuDTO): Promise<MenuDTO> => {
    await this.businessValidator.validateBusiness(
      updateDTO.userId,
      updateDTO.businessId,
    );
    let menu = await this.model.findById(menuId);
    this.checkMenu(menu);
    //update image
    if (updateDTO.removeImage === true) {
      await this.imageService.deleteImages([menu.imageUrl]);
      menu.imageUrl = undefined;
    } else if (updateDTO.menuImage) {
      const [imageUrl, deletedImages] = await Promise.all([
        this.imageService.saveFile(updateDTO.menuImage),
        this.imageService.deleteImages([menu.imageUrl]),
      ]);
      menu.imageUrl = imageUrl;
    }
    if (updateDTO.name) {
      menu.name = updateDTO.name;
    }
    if (updateDTO.tagline) {
      menu.tagline = updateDTO.tagline;
    }
    if (updateDTO.description) {
      menu.description = updateDTO.description;
    }
    menu = await menu.save();
    return this.sanitizer.sanitize(menu);
  };

  /** Activate a menu. @returns the id of the active menu*/
  activate = async (menuId: string): Promise<string> => {
    const activeMenu = await this.model.findOneAndUpdate(
      { isActive: true },
      { $set: { isActive: false } },
    );
    const menu = await this.model.findOneAndUpdate(
      { _id: menuId },
      { $set: { isActive: true } },
    );
    this.checkMenu(menu);
    return menu._id;
  };

  /** Gets the menus for the business */
  getByBusinessId = async (
    businessId: string,
    ownerId: string,
  ): Promise<MenuDTO[]> => {
    await this.businessValidator.validateBusiness(ownerId, businessId);
    const menus = await this.model.find({ businessId });
    return this.sanitizer.sanitizeMany(menus);
  };

  /** Gets a menu with menu Id */
  getById = async (menuId: string): Promise<MenuDTO> => {
    const menu = await this.model.findById(menuId);
    return this.sanitizer.sanitize(menu);
  };

  /********************** Private Methods **********************/
  /** @throws if the menu is undefined */
  private checkMenu(menu: IMenu) {
    if (!menu) {
      throw new HttpException('Menu was not found', HttpStatus.NOT_FOUND);
    }
  }
}
