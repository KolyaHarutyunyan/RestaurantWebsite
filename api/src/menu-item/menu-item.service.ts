// import { Injectable } from '@nestjs/common';
// import { Model } from 'mongoose';
// import { CreateMenuItemDto } from './dto/create-menu-item.dto';
// import { MenuItemResponseDTO } from './dto/menuItem.dto';
// import { UpdateMenuItemDto } from './dto/update-menu-item.dto';
// // import { CreateRestaurantDTO, RestaurantResponseDTO, UpdateRestaurantDTO } from './dto';
// import { IMenuItem } from './interfaces';
// import { ICategory } from '../category/interfaces';

// import { MenuItemModel } from './menu-item.schema';
// import { CategoryModel } from '../category/category.schema';

// @Injectable()
// export class MenuItemService {
//   constructor() {
//     this.model = MenuItemModel;
//     this.categoryModel = CategoryModel;

//   }
//   private model: Model<IMenuItem>;
//   private categoryModel: Model<ICategory>;

//   /** API */
//   /** Create menuItem */
//   async create(createMenuItemDto: CreateMenuItemDto) {

//     const menuItem = await new this.model({
//       restaurantId: createMenuItemDto.restaurantId,
//       name: createMenuItemDto.name,
//       description: createMenuItemDto.description,
//       option: createMenuItemDto.option,
//       price: createMenuItemDto.price
//     }).save();

//     menuItem.images.push({ url: createMenuItemDto.imageUrl, thumbURL: createMenuItemDto.thumbnailUrl });
//     await menuItem.save();

//     // const setMenuItem = await this.categoryModel.findById({ _id: createMenuItemDto.categoryId });
//     // setMenuItem.menuItems.push(menuItem._id);
//     // await setMenuItem.save()

//     return this.sanitizeMenuItem(menuItem);
//   }

//   async findAll() {
//     const getMenuItem = await this.model.find({})
//     return getMenuItem
//   }

//   async findOne(_id: string) {
//     const getMenuItem = await this.model.findById({ _id })
//     return getMenuItem
//   }
//   /** API */
//   /** update menuItem by id */
//   async update(_id: string, updateMenuItemDto: UpdateMenuItemDto) {
//     const updateMenuItem = await this.model.findOneAndUpdate({ _id }, {
//       name: updateMenuItemDto.name, description: updateMenuItemDto.description,
//       option: updateMenuItemDto.option, price: updateMenuItemDto.price
//     }, {new: true});

//     return this.sanitizeMenuItem(updateMenuItem);

//   }

//   async remove(_id: string) {

//     const deleteMenuItem = await this.model.findOneAndDelete({_id});

//     return deleteMenuItem;

//   }
//   /** Private Members */
//   private sanitizeMenuItem(item: IMenuItem) {
//     const sanitizedMenuItem: MenuItemResponseDTO = {
//       restaurantId: item.restaurantId,
//       id: item._id,
//       name: item.name,
//       description: item.description,
//       option: item.option,
//       price: item.price,
//       imageUrl: item.images[0]
//     };
//     return sanitizedMenuItem;
//   }
// }
