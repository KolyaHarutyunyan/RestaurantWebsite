import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { MenuModel } from './menu.model';
import { IMenu, IMenuCategory } from './interface';
import { MenuSanitizer } from './interceptor';
import {
  CreateMenuDTO,
  MenuCategoriesDTO,
  MenuDTO,
  UpdateMenuDTO,
} from './dto';
import { BusinessValidator } from '../business';
import { IImage, ImageService } from '../image';
import { CategoryService } from '../category';
import { CategoryType } from './menu.constants';
import { ReorderDTO } from './dto';
import { FullMenuDTO } from './dto/fullMenu.dto';

@Injectable()
export class MenuService {
  constructor(
    private readonly sanitizer: MenuSanitizer,
    private readonly imageService: ImageService,
    private readonly bsnValidator: BusinessValidator,
    private readonly categoryService: CategoryService,
  ) {
    this.model = MenuModel;
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
      foodCategories: [],
      drinkCategories: [],
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
      menu = await (await menu.save()).populate('image').execPopulate();
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
    menu = await menu.populate('image').execPopulate();
    return menu._id;
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

  /** Get the active menu for a business with categories and items  */
  getActive = async (businessId: string): Promise<FullMenuDTO> => {
    const menu = await this.model
      .findOne({
        businessId: businessId,
        isActive: true,
      })
      .populate('image');
    return await this.fillMenu(menu);
  };

  /** Gets the fully populated menu with all of its categories and items */
  getFullMenu = async (menuId: string): Promise<FullMenuDTO> => {
    const menu = await this.model.findById(menuId).populate('image');
    return await this.fillMenu(menu);
  };

  /** Delete Menu and remove images that were with it */
  delete = async (menuId: string, ownerId: string): Promise<string> => {
    const menu = await this.model.findById(menuId);
    this.checkMenu(menu);
    await this.bsnValidator.validateBusiness(ownerId, menu.businessId);
    this.imageService.removeMany([menu.image], ownerId);
    const deleted = await menu.delete();
    return deleted._id;
  };

  /** Remove Item from Category */
  addCategory = async (
    menuId: string,
    catId: string,
    userId: string,
    type: CategoryType,
  ): Promise<MenuCategoriesDTO> => {
    let menu = await this.model.findOne({ _id: menuId });
    this.checkMenu(menu);
    await this.bsnValidator.validateBusiness(userId, menu.businessId);
    const categories = this.getCategoryFromMenu(type, menu);
    categories.unshift({
      _id: catId,
      rank: 0,
    });
    this.rerank(menu.foodCategories);
    this.rerank(menu.drinkCategories);
    menu = await (await menu.save())
      .populate('foodCategories._id')
      .populate('drinkCategories._id')
      .execPopulate();
    if (this.cleanNulls(categories)) {
      await menu.save();
    }
    return this.sanitizer.sanitizeCategories(menu);
  };

  /** Remove Category from menu */
  removeCategory = async (
    menuId: string,
    catId: string,
    userId: string,
    type: CategoryType,
  ): Promise<MenuCategoriesDTO> => {
    let menu = await this.model.findOne({ _id: menuId });
    this.checkMenu(menu);
    await this.bsnValidator.validateBusiness(userId, menu.businessId);
    const categories = this.getCategoryFromMenu(type, menu);
    for (let i = 0; i < categories.length; i++) {
      if (categories[i]._id == catId) {
        categories.splice(i, 1);
        i--;
      }
    }
    this.rerank(menu.foodCategories);
    this.rerank(menu.drinkCategories);
    menu = await (await menu.save())
      .populate('foodCategories._id')
      .populate('drinkCategories._id')
      .execPopulate();
    return this.sanitizer.sanitizeCategories(menu);
  };

  /** Remove Category from all menus */
  deleteCategory = async (
    categoryId: string,
    ownerId: string,
  ): Promise<string> => {
    const category = await this.categoryService.delete(categoryId, ownerId);
    await this.model.updateMany(
      { businessId: category.businessId },
      {
        $pull: {
          drinkCategories: { _id: categoryId },
          foodCategories: { _id: categoryId },
        },
      },
      { multi: true },
    );
    return category._id;
  };

  /** Return the categories of the menu */
  getCategories = async (menuId: string): Promise<MenuCategoriesDTO> => {
    const menu = await this.model
      .findOne({ _id: menuId })
      .populate('foodCategories._id')
      .populate('drinkCategories._id');
    // this.rerank(menu.foodCategories);
    // this.rerank(menu.drinkCategories);
    return this.sanitizer.sanitizeCategories(menu);
  };

  /** reorder the categories according to the orde */
  reorderCategories = async (
    menuId: string,
    ownerId: string,
    reorderDTO: ReorderDTO,
    type: CategoryType,
  ): Promise<MenuCategoriesDTO> => {
    let menu = await this.model.findOne({ _id: menuId });
    this.checkMenu(menu);
    await this.bsnValidator.validateBusiness(ownerId, menu.businessId);
    const categories = this.getCategoryFromMenu(type, menu);
    this.checkBounds(reorderDTO.from, reorderDTO.to, categories.length);
    const removedCategory = categories.splice(reorderDTO.from, 1);
    categories.splice(reorderDTO.to, 0, removedCategory[0]);
    this.rerank(categories);
    menu = await (await menu.save())
      .populate('foodCategories._id')
      .populate('drinkCategories._id')
      .execPopulate();
    return this.sanitizer.sanitizeCategories(menu);
  };

  /********************** Private Methods **********************/
  /** @throws if the menu is undefined */
  private checkMenu(menu: IMenu) {
    if (!menu) {
      throw new HttpException('Menu was not found', HttpStatus.NOT_FOUND);
    }
  }

  /** Fills the menu with its categories and their items  */
  private fillMenu = async (menu: IMenu): Promise<FullMenuDTO> => {
    this.checkMenu(menu);
    const foodCategoryIds = this.extractCategoryIds(menu.foodCategories);
    const drinkCategoryIds = this.extractCategoryIds(menu.drinkCategories);
    const [foodCategories, drinkCategories] = await Promise.all([
      this.categoryService.getWithItems(foodCategoryIds),
      this.categoryService.getWithItems(drinkCategoryIds),
    ]);
    const fullMenu: FullMenuDTO = {
      id: menu._id,
      name: menu.name,
      tagline: menu.tagline,
      description: menu.description,
      image: this.getMenuImage(menu.image as IImage),
      foodCategories: foodCategories,
      drinkCategories: drinkCategories,
    };
    return fullMenu;
  };

  /** updates the ranks of the menu items */
  private rerank(categories: IMenuCategory[]) {
    for (let i = 0; i < categories.length; i++) {
      categories[i].rank = i;
    }
  }

  /** Check bounds */
  private checkBounds(from: number, to: number, length: number) {
    if (from >= length || from < 0) {
      throw new HttpException(
        'From value falls outside of the items list',
        HttpStatus.BAD_REQUEST,
      );
    }
    if (to >= length || to < 0) {
      throw new HttpException(
        'To value falls outside of the items list',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  private getCategoryFromMenu(
    type: CategoryType,
    menu: IMenu,
  ): IMenuCategory[] {
    let categories;
    if (type === CategoryType.FOOD) {
      categories = menu.foodCategories;
    } else if (type === CategoryType.DRINK) {
      categories = menu.drinkCategories;
    }
    return categories;
  }

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

  /** Extracts the category ids form MenuCategory */
  private extractCategoryIds(menuCategories: IMenuCategory[]): string[] {
    if (!menuCategories || menuCategories.length < 1) return [];
    const ids: string[] = [];
    for (let i = 0; i < menuCategories.length; i++) {
      ids.push(menuCategories[i]._id as string);
    }
    return ids;
  }

  /** Gets the menu image url if it exists */
  private getMenuImage(menuImage?: IImage): string {
    if (!menuImage) return undefined;
    if (menuImage.originalUrl) {
      return menuImage.originalUrl;
    }
    return undefined;
  }
}
