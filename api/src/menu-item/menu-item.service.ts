import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateMenuItemDto } from './dto/create-menu-item.dto';
import { MenuItemResponseDTO } from './dto/menuItem.dto';
import { UpdateMenuItemDto } from './dto/update-menu-item.dto';
// import { CreateRestaurantDTO, RestaurantResponseDTO, UpdateRestaurantDTO } from './dto';
import { IMenuItem } from './interfaces';
import { ICategory } from '../category/interfaces';

import { MenuItemModel } from './menu-item.schema';
import { CategoryModel } from '../category/category.schema';

@Injectable()
export class MenuItemService {
  constructor() {
    this.model = MenuItemModel;
    this.categoryModel = CategoryModel;

  }
  private model: Model<IMenuItem>;
  private categoryModel: Model<ICategory>;

  /** API */
  /** Create restaurant */
  async create(createMenuItemDto: CreateMenuItemDto) {

    const menuItem = await new this.model({
      name: createMenuItemDto.name,
      description: createMenuItemDto.description,
      option: createMenuItemDto.option,
      price: createMenuItemDto.price
    }).save();
    menuItem.images.push({ url: "url", thumbURL: "thumbURL" });
    menuItem.save();

    const setMenuItem = await this.categoryModel.findById({ _id: createMenuItemDto.categoryId });
    setMenuItem.menuItems.push(menuItem._id);
    setMenuItem.save()

    return this.sanitizeMenuItem(menuItem);
  }

  findAll() {
    return `This action returns all menuItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} menuItem`;
  }

  update(id: number, updateMenuItemDto: UpdateMenuItemDto) {
    return `This action updates a #${id} menuItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} menuItem`;
  }
  /** Private Members */
  private sanitizeMenuItem(item: IMenuItem) {
    const sanitizedMenuItem: MenuItemResponseDTO = {
      id: item._id,
      name: item.name,
      description: item.description,
      option: item.option,
      price: item.price,
    };
    return sanitizedMenuItem;
  }
}
