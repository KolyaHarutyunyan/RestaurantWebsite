// import { Injectable } from '@nestjs/common';
// import { CreateMenuDto, UpdateMenuDto, MenuResponseDTO } from './dto';
// import { MenuModel } from './menu.schema';
// import { businessModel } from "../business/business.schema";

// import { IMenu } from './interfaces';
// import { Ibusiness } from '../business/interfaces';

// import { Model } from 'mongoose';

// @Injectable()
// export class MenuService {
//   constructor() {
//     this.model = MenuModel;
//     this.businessModel = businessModel;
//   }
//   private model: Model<IMenu>;
//   private businessModel: Model<Ibusiness>
//   /** API */
//   /** Create menu */
//   create = async (createMenuDTO: CreateMenuDto) => {
//     const menu = await new this.model({
//       businessId: createMenuDTO.businessId,
//       name: createMenuDTO.name,
//       description: createMenuDTO.description,
//       menuImg: createMenuDTO.menuImg,
//       tagline: createMenuDTO.tagline,
//       isActive: createMenuDTO.isActive
//     }).save();

//     const setMenu = await this.businessModel.findById({ _id: createMenuDTO.businessId });
//     setMenu.menus.push(menu._id);

//     await setMenu.save()

//     return this.sanitizeMenu(menu);
//   };

//   /** API */
//   /** get business */
//   async findAll() {

//     const getAllMenu = await this.model.find({})
//     return getAllMenu

//   }

//   /** API */
//   /** get menu by id */
//   async findOne(_id: string) {

//     const getMenu = await this.model.findById({ _id }).populate('foodCategories').populate('drinkCategories');
//     return getMenu

//   }
//    /** API */
//   /** duplicate menu by id */
//   async duplicate(_id: string) {

//     const getMenu = await this.model.findById({ _id });

//     var newDoc = getMenu;

//     delete newDoc['_id'];

//     const setDuplicateData = await new this.model({
//       businessId: newDoc.businessId,
//       name: newDoc.name,
//       description: newDoc.description,
//       menuImg: newDoc.menuImg,
//       tagline: newDoc.tagline,
//       isActive: newDoc.isActive
//      }).save();

//     return setDuplicateData

//   }

//   /** API */
//   /** update menu by id */
//   async update(_id: string, updateMenuDto: UpdateMenuDto) {
//     const updateMenu = await this.model.findOneAndUpdate({ _id }, {
//       name: updateMenuDto.name, description: updateMenuDto.description,
//       tagline: updateMenuDto.tagline, isActive: updateMenuDto.isActive
//     }, { new: true });

//     return this.sanitizeMenu(updateMenu);
//   }

//   async remove(_id: string) {
//     const deleteMenu = await this.model.findOneAndDelete({ _id });

//     return deleteMenu;

//   }

//   /** Private Members */
//   private sanitizeMenu(menu: IMenu) {
//     const sanitizedMenu: MenuResponseDTO = {
//       id: menu._id,
//       name: menu.name,
//       tagline: menu.tagline,
//       description: menu.description,
//       menuImg: menu.menuImg,
//       isActive: menu.isActive
//     };
//     return sanitizedMenu;
//   }
// }
