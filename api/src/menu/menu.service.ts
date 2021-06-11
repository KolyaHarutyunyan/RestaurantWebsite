import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { MenuModel } from './menu.model';
import { IMenu } from './interface';
import { MenuSanitizer } from './interceptor';
import { CreateMenuDTO, MenuDTO, UpdateMenuDTO } from './dto';
import { BusinessValidator } from 'src/business';

@Injectable()
export class MenuService {
  constructor(
    private readonly sanitizer: MenuSanitizer,
    private readonly bsnValidator: BusinessValidator,
  ) {
    this.model = MenuModel;
    // this.businessModel = businessModel;
  }
  private model: Model<IMenu>;

  /** Create menu */
  create = async (menuDTO: CreateMenuDTO): Promise<MenuDTO> => {
    // check if the correct user is creating a business
    await this.bsnValidator.validateBusiness(
      menuDTO.userId,
      menuDTO.businessId,
    );
    let menu = new this.model({
      owner: menuDTO.userId,
      businessId: menuDTO.businessId,
      name: menuDTO.name,
      isActive: false,
      categories: [],
    });
    if (menuDTO.description) {
      menu.description = menuDTO.description;
    }
    if (menuDTO.mainImage) {
      menu.image = menuDTO.mainImage;
    }
    menu = await menu.save();
    if (menu.image) {
      menu = await menu.populate('image').execPopulate();
    }
    return this.sanitizer.sanitize(menu);
  };

  /** Update the menu fields */
  edit = async (menuId: string, updateDTO: UpdateMenuDTO): Promise<MenuDTO> => {
    let menu = await this.model.findOne({
      _id: menuId,
      owner: updateDTO.userId,
    });
    this.checkMenu(menu);
    //update image
    if (updateDTO.mainImage) {
      if (updateDTO.mainImage === 'DELETE') {
        menu.image = undefined;
      } else {
        menu.image = updateDTO.mainImage;
      }
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
    if (menu.image) {
      menu = await menu.populate('image').execPopulate();
    }
    return this.sanitizer.sanitize(menu);
  };

  /** Activate a menu. @returns the id of the active menu*/
  toggleActive = async (menuId: string, ownerId: string): Promise<string> => {
    //find the active menu for this business and set it to inactive
    let menu = await this.model.findOneAndUpdate(
      { isActive: true, owner: ownerId },
      { isActive: false },
      { new: true },
    );
    // if the menu was not the one that needs toggling, find the menu and set it to active
    if (menu?._id != menuId) {
      menu = await this.model.findOne({ _id: menuId, owner: ownerId });
      this.checkMenu(menu);
      menu.isActive = true;
      menu = await menu.save();
    }
    return menu._id;
  };

  /** Remove Item from Category */
  addCategory = async (
    menuId: string,
    catId: string,
    userId: string,
  ): Promise<MenuDTO> => {
    let menu = await this.model.findOne({ _id: menuId });
    this.checkMenu(menu);
    await this.bsnValidator.validateBusiness(userId, menu.businessId);
    menu.categories.push(catId);
    menu = await (await menu.save()).populate('categories').execPopulate();
    return this.sanitizer.sanitize(menu);
  };

  /** Remove Item from Category */
  removeCategory = async (
    catId: string,
    itemId: string,
    userId: string,
  ): Promise<MenuDTO> => {
    let menu = await this.model.findOne({ _id: catId });
    this.checkMenu(menu);
    await this.bsnValidator.validateBusiness(userId, menu.businessId);
    for (let i = 0; i < menu.categories.length; i++) {
      if (menu.categories[i] == itemId) {
        menu.categories.splice(i, 1);
        i--;
      }
    }
    menu = await (await menu.save()).populate('categories').execPopulate();
    return this.sanitizer.sanitize(menu);
  };

  /** Gets the menus for the business */
  getByBusinessId = async (
    businessId: string,
    ownerId: string,
  ): Promise<MenuDTO[]> => {
    await this.bsnValidator.validateBusiness(ownerId, businessId);
    const menus = await this.model.find({ businessId }).populate('image');
    return this.sanitizer.sanitizeMany(menus);
  };

  /** Gets a menu with menu Id */
  getById = async (menuId: string): Promise<MenuDTO> => {
    const menu = await this.model.findById(menuId).populate('image');
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
