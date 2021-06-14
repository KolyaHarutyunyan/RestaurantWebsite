import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BusinessValidator } from 'src/business';
import { ItemService } from 'src/item/item.service';
import { CategoryModel } from './category.model';
import {
  CategoryRO,
  CreateCategoryDTO,
  EditCategoryDTO,
  ReorderDTO,
} from './dto';
import { CategorySanitizer } from './interceptor/sanitizer.interceptor';
import { ICategory, ICategoryItem } from './interface';

@Injectable()
export class CategoryService {
  constructor(
    private readonly sanitizer: CategorySanitizer,
    private readonly bsnValidator: BusinessValidator,
    private readonly itemService: ItemService,
  ) {
    this.model = CategoryModel;
  }
  private model: Model<ICategory>;

  /** Create a new Category */
  create = async (dto: CreateCategoryDTO): Promise<CategoryRO> => {
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
  ): Promise<CategoryRO> => {
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
  ): Promise<CategoryRO> => {
    let category = await this.model.findOne({ _id: catId });
    this.checkCategory(category);
    await this.bsnValidator.validateBusiness(userId, category.businessId);
    const rank = category.items.length + 1;
    category.items.push({
      _id: itemId,
      rank,
    });
    category = await category.save();
    return this.sanitizer.sanitize(category);
  };

  /** Remove Item from Category */
  removeItem = async (
    catId: string,
    itemId: string,
    userId: string,
  ): Promise<CategoryRO> => {
    let category = await this.model.findOne({ _id: catId });
    this.checkCategory(category);
    await this.bsnValidator.validateBusiness(userId, category.businessId);
    for (let i = 0; i < category.items.length; i++) {
      if (category.items[i]._id == itemId) {
        category.items.splice(i, 1);
        i--;
        //Check the array length here
      }
    }
    this.rerank(category.items);
    category = await category.save();
    return this.sanitizer.sanitize(category);
  };

  /** reorder the categories according to the orde */
  reorderItems = async (
    categorId: string,
    ownerId: string,
    reorderDTO: ReorderDTO,
  ): Promise<CategoryRO> => {
    let category = await this.model.findOne({ _id: categorId });
    this.checkCategory(category);
    await this.bsnValidator.validateBusiness(ownerId, category.businessId);
    const removedItem = category.items.splice(reorderDTO.from, 1);
    category.items.splice(reorderDTO.to, 0, removedItem[0]);
    this.rerank(category.items);
    category = await (await category.save()).populate('image').execPopulate();
    return this.sanitizer.sanitize(category);
  };

  /** Remove the item from the whole system */
  deleteItem = async (itemId: string, ownerId: string): Promise<string> => {
    const item = await this.itemService.delete(itemId, ownerId);
    await this.model.updateMany(
      { businessId: item.businessId },
      { $pull: { items: { _id: itemId } } },
    );
    return item._id;
  };

  /** Delete A category and @return its Id */
  delete = async (catId: string, ownerId: string): Promise<ICategory> => {
    let category = await this.model.findOne({ _id: catId });
    this.checkCategory(category);
    await this.bsnValidator.validateBusiness(ownerId, category.businessId);
    category = await category.delete();
    return category;
  };

  /** @returns the category with the items populated */
  getById = async (categoryId: string): Promise<CategoryRO> => {
    const category = await this.model
      .findById(categoryId)
      .populate('items._id');
    // const category = await this.model.findById(categoryId);

    return this.sanitizer.sanitize(category);
  };
  /** Private methods */
  /** Check if category exists */
  private checkCategory(category: ICategory) {
    if (!category) {
      throw new HttpException('Category was not found', HttpStatus.NOT_FOUND);
    }
  }

  /** updates the ranks of the menu items */
  private rerank(items: ICategoryItem[]) {
    for (let i = 0; i < items.length; i++) {
      items[i].rank = i;
    }
  }
}
