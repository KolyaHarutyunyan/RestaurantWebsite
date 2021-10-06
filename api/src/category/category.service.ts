import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BusinessValidator } from 'src/business';
import { ItemService } from 'src/item/item.service';
import { CategoryModel } from './category.model';
import {
  CategoryDTO,
  CreateCategoryDTO,
  EditCategoryDTO,
  ReorderDTO,
} from './dto';
import { CategoryItemsDTO } from './dto/categoryItems.dto';
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
  create = async (dto: CreateCategoryDTO): Promise<CategoryDTO> => {
    //Verify that the business is owned by the user
    await this.bsnValidator.validateBusiness(dto.userId, dto.businessId);
    let category = new this.model({
      name: dto.name,
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
    cat = await cat.save();
    return this.sanitizer.sanitize(cat);
  };

  /** @returns the category  */
  getById = async (categoryId: string): Promise<CategoryDTO> => {
    const category = await this.model.findById(categoryId);
    this.checkCategory(category);
    return this.sanitizer.sanitize(category);
  };

  /** Get categories with items populated */
  getWithItems = async (categoryIds: string[]): Promise<CategoryItemsDTO[]> => {
    const categories = await this.model
      .find({ _id: { $in: categoryIds } })
      .populate({
        path: 'items._id',
        model: 'item',
        populate: [
          { path: 'images', model: 'image' },
          { path: 'mainImage', model: 'image' },
        ],
      });
    return this.sanitizer.sanitizeManyWithItems(categories);
  };

  /** Gets all categories in the system without their items */
  getAll = async (businessId: string): Promise<CategoryDTO[]> => {
    const categories = await this.model.find({ businessId: businessId });
    return this.sanitizer.sanitizeMany(categories);
  };

  /** Delete A category and @return its Id */
  delete = async (catId: string, ownerId: string): Promise<ICategory> => {
    let category = await this.model.findOne({ _id: catId });
    this.checkCategory(category);
    await this.bsnValidator.validateBusiness(ownerId, category.businessId);
    category = await category.delete();
    return category;
  };

  /** Remove Item from Category */
  addItem = async (
    catId: string,
    itemId: string,
    userId: string,
  ): Promise<CategoryItemsDTO> => {
    let category = await this.model.findOne({ _id: catId });
    this.checkCategory(category);
    await this.bsnValidator.validateBusiness(userId, category.businessId);
    category.items.unshift({
      _id: itemId,
      rank: 0,
    });
    // console.log(category.items);
    this.rerank(category.items);
    category = await category.save();
    category = await category
      .populate({
        path: 'items._id',
        model: 'item',
        populate: [
          { path: 'images', model: 'image' },
          { path: 'mainImage', model: 'image' },
        ],
      })
      .execPopulate();
    if (this.cleanNulls(category.items)) {
      this.rerank(category.items);
      await category.save();
    }
    return this.sanitizer.sanitizeItems(category);
  };

  /** Remove Item from Category */
  removeItem = async (
    catId: string,
    itemId: string,
    userId: string,
  ): Promise<CategoryItemsDTO> => {
    let category = await this.model.findOne({ _id: catId });
    this.checkCategory(category);
    await this.bsnValidator.validateBusiness(userId, category.businessId);
    for (let i = 0; i < category.items.length; i++) {
      if (category.items[i]._id == itemId) {
        category.items.splice(i, 1);
        i--;
      }
    }
    this.rerank(category.items);
    category = await category.save();
    await category
      .populate({
        path: 'items._id',
        model: 'item',
        populate: [
          { path: 'images', model: 'image' },
          { path: 'mainImage', model: 'image' },
        ],
      })
      .execPopulate();
    return this.sanitizer.sanitizeItems(category);
  };

  /** reorder the categories according to the orde */
  reorderItems = async (
    categorId: string,
    ownerId: string,
    reorderDTO: ReorderDTO,
  ): Promise<CategoryItemsDTO> => {
    let category = await this.model.findOne({ _id: categorId });
    this.checkCategory(category);
    await this.bsnValidator.validateBusiness(ownerId, category.businessId);
    this.checkBounds(reorderDTO.from, reorderDTO.to, category.items.length);
    const removedItem = category.items.splice(reorderDTO.from, 1);
    category.items.splice(reorderDTO.to, 0, removedItem[0]);
    this.rerank(category.items);
    category = await (
      await category.save()
    )
      .populate({
        path: 'items._id',
        model: 'item',
        populate: [
          { path: 'images', model: 'image' },
          { path: 'mainImage', model: 'image' },
        ],
      })
      .execPopulate();
    return this.sanitizer.sanitizeItems(category);
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

  /** @return the items of this category */
  getItems = async (categoryId: string): Promise<CategoryItemsDTO> => {
    const category = await this.model.findById(categoryId).populate({
      path: 'items._id',
      model: 'item',
      populate: [
        { path: 'images', model: 'image' },
        { path: 'mainImage', model: 'image' },
      ],
    });
    // this.rerank(category.items);
    return this.sanitizer.sanitizeItems(category);
  };

  /** @returns the raw category - for system use only, do not send to client */
  find = async (categoryId: string): Promise<ICategory> => {
    return await this.model.findById(categoryId);
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

  /** Clean nulls */
  private cleanNulls(items: ICategoryItem[]): boolean {
    let hasRemoved = false;
    for (let i = 0; i < items.length; i++) {
      if (items[i]._id === null) {
        hasRemoved = true;
        items.splice(i, 1);
        i--;
      }
    }
    return hasRemoved;
  }
}
