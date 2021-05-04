import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryModel } from './category.schema';
import { MenuItemModel } from '../menu-item/menu-item.schema';

import { ICategory } from './interfaces';
import { Model } from 'mongoose';
import { MenuModel } from '../menu/menu.schema';
import { IMenu } from '../menu/interfaces';
import { IMenuItem } from '../menu-item/interfaces';

@Injectable()
export class CategoryService extends Object {
  constructor() {
    super()
    this.model = CategoryModel;
    this.menuModel = MenuModel;
    this.menuItemModel = MenuItemModel;

  }
  private model: Model<ICategory>;
  private menuModel: Model<IMenu>;
  private menuItemModel: Model<IMenuItem>;
  /** API */
  /** Create menu */
  async create(createCategoryDto: CreateCategoryDto) {

    const addCategory = await new this.model({
      restaurantId: createCategoryDto.restaurantId,
      name: createCategoryDto.name
    }).save();
    // const setCategory = await this.menuModel.findById({ _id: createCategoryDto.menuId });

    // const category = createCategoryDto.name;

    // setCategory[category].push(setCategory._id);
    // await setCategory.save()

    return addCategory
  }

  /** API */
  /** Create transferMenuItem */
  async addMenuItem(menuItemId: string, categoryId: string) {

    const getCategory = await this.model.findByIdAndUpdate({ _id: categoryId },
      { $addToSet: { menuItems: menuItemId } }, { new: true });

    return getCategory
  }

  async findByCategoryIds(categoryIds: string[]) {
    const findByCategoryIds = await this.model.find({_id: {$in: categoryIds}});

    return findByCategoryIds
  }

  async findOne(_id: string) {
    const getCategory = await this.model.findById({ _id }).populate('menuItems')
    return getCategory
  }

  async getAll(restaurantId: string) {
    
    const getAllCategory = await this.model.find({ restaurantId });
    return getAllCategory
  }
  async getAllCategories() {
    
    const getAllCategory = await this.model.find({ });
    return getAllCategory
  }
  
  // update ara
  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
