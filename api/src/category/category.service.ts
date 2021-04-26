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
      name: createCategoryDto.name,
    }).save();
    // const setCategory = await this.menuModel.findById({ _id: createCategoryDto.menuId });

    const category = createCategoryDto.name;

    // setCategory[category].push(setCategory._id);
    // await setCategory.save()

    return addCategory
  }

  /** API */
  /** Create transferMenuItem */
  async transferMenuItem(menuItem: any) {
    const getMenuItem = await this.menuItemModel.findById({ _id: menuItem.menuItemId })
    const getCategory = await this.model.findById({ _id: menuItem.categoryId })
    getCategory.menuItems.push(getMenuItem._id);
    await getCategory.save();
    return getCategory
  }

  findAll() {
    return `This action returns all category`;
  }

  async findOne(_id: string) {
    const getCategory = await this.model.findById({ _id }).populate('menuItems')
    return getCategory
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
