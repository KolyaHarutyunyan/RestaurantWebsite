import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryModel } from './category.schema';
import { ICategory } from './interfaces';
import { Model } from 'mongoose';
import { MenuModel } from '../menu/menu.schema';
import { IMenu } from '../menu/interfaces';

@Injectable()
export class CategoryService {
  constructor() {
    this.model = CategoryModel;
    this.menuModel = MenuModel;

  }
  private model: Model<ICategory>;
  private menuModel: Model<IMenu>
  /** API */
  /** Create menu */
  async create(createCategoryDto: CreateCategoryDto) {

    const addCategory = await new this.model({
      name: createCategoryDto.name,
    }).save();
    const setCategory = await this.menuModel.findById({_id: createCategoryDto.menuId});
    
    const category = createCategoryDto.name;

    setCategory[category].push(setCategory._id);
    await setCategory.save()

    return addCategory
  }

  findAll() {
    return `This action returns all category`;
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
