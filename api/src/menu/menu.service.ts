import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { MenuModel } from './menu.model';
import { IMenu, IMenuCategory } from './interface';
import { MenuSanitizer } from './menu.sanitizer';
import {
  CreateMenuDTO,
  MenuDTO,
  EditMenuDTO,
  CreateCategoryDTO,
  EditCategoryDTO,
  AddItemDTO,
} from './dto';
import { BusinessService } from '../business/business.service';
import { CategoryType } from './menu.constants';
import { ReorderDTO } from '../util/dto/reorder.dto';
import { FileService } from 'src/components/file/file.service';
import { SessionDTO } from 'src/auth';
import { IMenuItem } from './interface/menu.interface';
import { DTO } from 'src/util/dto';

@Injectable()
export class MenuService {
  constructor(
    private readonly sanitizer: MenuSanitizer,
    private readonly fileService: FileService,
    private readonly bsnService: BusinessService,
  ) {
    this.model = MenuModel;
  }
  private model: Model<IMenu>;

  /** Create menu */
  async create(dto: CreateMenuDTO): Promise<MenuDTO> {
    await this.bsnService.validateOwner(dto.user.id, dto.businessId.toString());
    let menu = new this.model({
      owner: dto.user.id,
      businessId: dto.businessId,
      name: dto.name,
      isActive: false,
      food: [],
      drinks: [],
      description: dto.description,
      tagline: dto.tagline,
      image: dto.image,
    });
    menu = await menu.save();
    return this.sanitizer.sanitize(menu);
  }

  /** Update the menu fields */
  async edit(id: string, dto: EditMenuDTO): Promise<MenuDTO> {
    let menu = await this.model.findOne({ _id: id, owner: dto.user.id });
    console.log(dto.user.id)
    this.checkMenu(menu);
    if (dto.name) menu.name = dto.name;
    if (dto.tagline) menu.tagline = dto.tagline;
    if (dto.description || dto.description === null) menu.description = dto.description;
    if (dto.image) menu.image = dto.image;
    if (dto.removeImage && menu.image) {
      await this.fileService.deleteFile(dto.user.id, menu.image.id);
      menu.image = undefined;
    }
    menu.updatedDate = new Date();
    menu = await menu.save();
    return await this.fillMenu(menu);
  }

  /** Activate a menu. @returns the id of the active menu*/
  async toggle(id: string, owner: SessionDTO): Promise<MenuDTO> {
    const menu = await this.model.findOne({ _id: id, owner: owner.id });
    this.checkMenu(menu);
    if (menu.isActive) {
      menu.isActive = false;
    } else {
      //set every menu inactive and then set this one active
      await this.model.updateMany({ owner: owner.id }, { $set: { isActive: false } });
      menu.isActive = true;
    }
    await menu.save();
    return await this.fillMenu(menu);
  }

  /** Gets the menus for the business */
  async getByBusinessId(businessId: string, user: SessionDTO): Promise<MenuDTO[]> {
    await this.bsnService.validateOwner(user.id, businessId);
    const menus: any = await this.model
      .find({ businessId })
      .populate('food.items.item')
      .populate('drinks.items.item');
    return this.sanitizer.sanitizeMany(menus);
  }

  /** Gets a menu with menu Id */
  async getOne(menuId: string): Promise<MenuDTO> {
    const menu = await this.model.findById(menuId);
    return await this.fillMenu(menu);
  }

  /** Get the active menu for a business with categories and items  */
  async getActive(businessId: string): Promise<MenuDTO> {
    const menu = await this.model.findOne({
      businessId: businessId,
      isActive: true,
    });
    return await this.fillMenu(menu);
  }

  /** Delete Menu and remove images that were with it */
  async delete(menuId: string, user: SessionDTO): Promise<string> {
    const menu = await this.model.findById(menuId);
    this.checkMenu(menu);
    await this.bsnService.validateOwner(user.id, menu.businessId.toString());
    if (menu.image) {
      await this.fileService.deleteFile(user.id, menu.image.id);
    }
    const deleted = await menu.delete();
    return deleted._id;
  }

  /** Remove Item from Category */
  async addCategory(menuId: string, dto: CreateCategoryDTO): Promise<MenuDTO> {
    const menu = await this.model.findOne({ _id: menuId });
    this.checkMenu(menu);
    await this.bsnService.validateOwner(dto.user.id, menu.businessId.toString());
    const categories = this.getCategories(menu, dto.type);
    categories.unshift({
      name: dto.name,
      description: dto.description,
      active: dto.active === false ? false : true,
      items: [],
    } as IMenuCategory);
    await menu.save();
    return await this.fillMenu(menu);
  }

  /** Edit the category */
  async editCategory(menuId: string, categoryId: string, dto: EditCategoryDTO): Promise<MenuDTO> {
    const menu = await this.model.findById(menuId);
    this.checkMenu(menu);
    await this.bsnService.validateOwner(dto.user.id, menu.businessId.toString());
    const categories = this.getCategories(menu, dto.type);
    const category = categories.find((cat) => cat._id.toString() === categoryId);
    category.name = dto.name;
    category.active = dto.active;
    if (dto.description || dto.description === null) category.description = dto.description;
    await menu.save();
    return await this.fillMenu(menu);
  }

  /** Remove Category from menu */
  async removeCategory(
    menuId: string,
    catId: string,
    userId: string,
    type: CategoryType,
  ): Promise<MenuDTO> {
    const menu = await this.model.findOne({ _id: menuId });
    this.checkMenu(menu);
    await this.bsnService.validateOwner(userId, menu.businessId.toString());
    const categories = this.getCategories(menu, type);
    const index = categories.findIndex((cat) => cat._id.toString() === catId);
    //category was not found, just return the menu as is
    if (index < 0) return this.sanitizer.sanitize(menu);
    //Category was found, remove it and return the new menu
    categories.splice(index, 1);
    await menu.save();
    return await this.fillMenu(menu);
  }

  /** reorder the categories according to the orde */
  async reorderCategories(menuId: string, type: CategoryType, dto: ReorderDTO): Promise<MenuDTO> {
    const menu = await this.model.findOne({ _id: menuId });
    this.checkMenu(menu);
    await this.bsnService.validateOwner(dto.user.id, menu.businessId);
    let categories = this.getCategories(menu, type);
    if (!categories) {
      throw new HttpException('Category was not found', HttpStatus.BAD_REQUEST);
    }
    categories = this.reorder(categories, dto.from, dto.to);
    const [filledMenu] = await Promise.all([this.fillMenu(menu), menu.save()]);
    return filledMenu;
  }

  /** adds an item to a category */
  async addItem(
    menuId: string,
    catId: string,
    type: CategoryType,
    dto: AddItemDTO,
  ): Promise<MenuDTO> {
    const menu = await this.model.findById(menuId);
    this.checkMenu(menu);
    await this.bsnService.validateOwner(dto.user.id, menu.businessId.toString());
    const category = this.findCategory(menu, type, catId);
    category.items.unshift({ item: dto.itemId } as IMenuItem);
    await menu.save();
    return await this.fillMenu(menu);
  }

  /** Removes an item from a category */
  async removeItem(
    menuId: string,
    catId: string,
    type: CategoryType,
    itemId: string,
    userId: string,
  ): Promise<MenuDTO> {
    const menu = await this.model.findById(menuId);
    this.checkMenu(menu);
    await this.bsnService.validateOwner(userId, menu.businessId.toString());
    const category = this.findCategory(menu, type, catId);
    const index = category.items.findIndex((item: any) => {
      return item.item._id.toString() === itemId;
    });
    if (index < 0) {
      throw new HttpException('Item was not found in this category', HttpStatus.NOT_FOUND);
    }
    category.items.splice(index, 1);
    await menu.save();
    return await this.fillMenu(menu);
  }

  /** Edits the item inside a category */
  // async editItem() {}

  /** reodred the items withing a category */
  async reorderItems(
    menuId: string,
    catId: string,
    type: CategoryType,
    dto: ReorderDTO,
  ): Promise<MenuDTO> {
    const menu = await this.model.findOne({ _id: menuId });
    this.checkMenu(menu);
    await this.bsnService.validateOwner(dto.user.id, menu.businessId);
    const categories = this.getCategories(menu, type);
    if (!categories) {
      throw new HttpException('Category was not found', HttpStatus.BAD_REQUEST);
    }
    const category = categories.find((el) => el._id.toString() === catId);
    this.reorder(category.items, dto.from, dto.to);
    const [filledMenu] = await Promise.all([this.fillMenu(menu), menu.save()]);
    return filledMenu;
  }

  /********************** Private Methods **********************/
  /** @throws if the menu is undefined */
  private checkMenu(menu: IMenu) {
    if (!menu) {
      throw new HttpException('Menu was not found', HttpStatus.NOT_FOUND);
    }
  }

  /** Fills the menu with its categories and their items  */
  private fillMenu = async (menu: IMenu): Promise<MenuDTO> => {
    menu = await menu
      .populate({
        path: 'food',
        populate: { path: 'items.item' },
      })
      .populate({
        path: 'drinks',
        populate: { path: 'items.item' },
      })
      .execPopulate();
    return this.sanitizer.sanitize(menu);
  };

  /** Cleans the null/ wrong entires in the array */
  private cleanNulls(categories: IMenuCategory[]): boolean {
    let hasRemoved = false;
    for (let i = 0; i < categories.length; i++) {
      if (categories[i]._id === null) {
        hasRemoved = true;
        categories.splice(i, 1);
        i--;
      }
    }
    return hasRemoved;
  }

  /** Returns a reference to a category array based on type from a menu */
  private getCategories(menu: IMenu, type: CategoryType): IMenuCategory[] {
    if (type === CategoryType.DRINK) {
      return menu.drinks;
    } else if (type === CategoryType.FOOD) {
      return menu.food;
    }
    return null;
  }

  /** Finds a category from a menu */
  private findCategory(menu: IMenu, type: CategoryType, catId: string): IMenuCategory {
    const categories = this.getCategories(menu, type);
    const category = categories.find((cat) => cat._id.toString() === catId);
    if (!category) throw new HttpException('Category was not found ', HttpStatus.NOT_FOUND);
    return category;
  }

  /** removes the element that is in from index and inserts it in the to index */
  private reorder(arr: any[], from: number, to: number): any[] {
    if (from >= arr.length || from < 0) {
      throw new HttpException('From value falls outside of the items list', HttpStatus.BAD_REQUEST);
    }
    if (to >= arr.length || to < 0) {
      throw new HttpException('To value falls outside of the items list', HttpStatus.BAD_REQUEST);
    }
    const removed = arr.splice(from, 1);
    arr.splice(to, 0, removed[0]);
    return arr;
  }
}
