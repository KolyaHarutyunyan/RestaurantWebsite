import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BusinessValidator } from 'src/business';
import { CategoryModel } from './category.model';
import { CategoryDTO, CreateCategoryDTO, EditCategoryDTO } from './dto';
import { CategorySanitizer } from './interceptor/sanitizer.interceptor';
import { ICategory } from './interface';

@Injectable()
export class CategoryService {
  constructor(
    private readonly sanitizer: CategorySanitizer,
    private readonly bsnValidator: BusinessValidator,
  ) {
    this.model = CategoryModel;
  }
  private model: Model<ICategory>;

  /** Create a new Category */
  create = async (dto: CreateCategoryDTO): Promise<CategoryDTO> => {
    //Verify that the business is owned by the user
    await this.bsnValidator.validateBusiness(dto.userId, dto.businessId);
    let category = new this.model({
      name: dto.name,
      type: dto.type,
      businessId: dto.businessId,
      description: dto.description,
      items: [],
    });
    category = await category.save();
    return this.sanitizer.sanitize(category);
  };

  /** Edit the category */
  edit = async (
    categoryId: string,
    editDTO: EditCategoryDTO,
  ): Promise<CategoryDTO> => {
    let cat = await this.model.findById(categoryId);
    this.checkCategory(cat);
    await this.bsnValidator.validateBusiness(editDTO.userId, cat.businessId);
    if (editDTO.name) cat.name = editDTO.name;
    if (editDTO.description) cat.description = editDTO.description;
    if (editDTO.type) cat.type = editDTO.type;
    cat = await cat.save();
    return this.sanitizer.sanitize(cat);
  };

  /** Remove Item from Category */
  addItem = async (
    catId: string,
    itemId: string,
    userId: string,
  ): Promise<CategoryDTO> => {
    let category = await this.model.findOne({ _id: catId });
    this.checkCategory(category);
    await this.bsnValidator.validateBusiness(userId, category.businessId);
    category.items.push(itemId);
    category = await category.save();
    return this.sanitizer.sanitize(category);
  };

  /** Remove Item from Category */
  removeItem = async (
    catId: string,
    itemId: string,
    userId: string,
  ): Promise<CategoryDTO> => {
    let category = await this.model.findOne({ _id: catId });
    this.checkCategory(category);
    await this.bsnValidator.validateBusiness(userId, category.businessId);
    for (let i = 0; i < category.items.length; i++) {
      if (category.items[i] == itemId) {
        category.items.splice(i, 1);
        i--;
        //Check the array length here
      }
    }
    category = await category.save();
    return this.sanitizer.sanitize(category);
  };

  /** Delete A category and @return its Id */
  delete = async (catId: string, ownerId: string): Promise<string> => {
    const category = await this.model.findOne({ _id: catId });
    this.checkCategory(category);
    await this.bsnValidator.validateBusiness(ownerId, category.businessId);
    const response = await category.delete();
    return response._id;
  };

  /** Private methods */
  /** Check if category exists */
  private checkCategory(category: ICategory) {
    if (!category) {
      throw new HttpException('Category was not found', HttpStatus.NOT_FOUND);
    }
  }
}
