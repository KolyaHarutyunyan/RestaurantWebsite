import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BusinessService } from 'src/business/business.service';
import { ItemService } from 'src/item/item.service';
import { CategoryModel } from './category.model';
import { CategoryDTO, CreateCategoryDTO, EditCategoryDTO, ReorderDTO } from './dto';
import { CategoryItemsDTO } from './dto/categoryItems.dto';
import { CategorySanitizer } from './category.sanitizer';
import { ICategory, ICategoryItem } from './interface';
import { SessionDTO } from 'src/auth';

@Injectable()
export class CategoryService {
  constructor(
    private readonly sanitizer: CategorySanitizer,
    private readonly bsnService: BusinessService,
    private readonly itemService: ItemService,
  ) {
    this.model = CategoryModel;
  }
  private model: Model<ICategory>;

  /** Create a new Category */
  async create(dto: CreateCategoryDTO): Promise<CategoryDTO> {
    await this.bsnService.validateOwner(dto.user.id, dto.businessId);
    let category = new this.model({
      name: dto.name,
      businessId: dto.businessId,
      description: dto.description,
      items: [],
      ownerId: dto.user.id,
    });
    category = await category.save();
    return this.sanitizer.sanitize(category);
  }

  /** Edit the category */
  async edit(categoryId: string, dto: EditCategoryDTO): Promise<CategoryDTO> {
    let cat = await this.model.findById(categoryId);
    this.checkCategory(cat);
    await this.bsnService.validateOwner(dto.user.id, cat.businessId);
    if (dto.name) cat.name = dto.name;
    if (dto.description) cat.description = dto.description;
    cat = await cat.save();
    return this.sanitizer.sanitize(cat);
  }

  /** @returns the category  */
  async getById(id: string): Promise<CategoryDTO> {
    const category = await this.model.findById(id);
    this.checkCategory(category);
    return this.sanitizer.sanitize(category);
  }

  /** Get categories with items populated */
  async getWithItems(categoryIds: string[]): Promise<CategoryItemsDTO[]> {
    const categories = await this.model.find({ _id: { $in: categoryIds } }).populate('items._id');
    // if (this.cleanNulls(category.items)) {
    //   this.rerank(category.items);
    //   await category.save();
    // }
    return this.sanitizer.sanitizeManyWithItems(categories);
  }

  /** Gets all categories in the system without their items */
  async getAll(businessId: string): Promise<CategoryDTO[]> {
    const categories = await this.model.find({ businessId: businessId });
    return this.sanitizer.sanitizeMany(categories);
  }

  /** Delete A category and @return its Id */
  async delete(catId: string, ownerId: string): Promise<ICategory> {
    let category = await this.model.findOne({ _id: catId });
    this.checkCategory(category);
    await this.bsnService.validateOwner(ownerId, category.businessId);
    category = await category.delete();
    return category;
  }

  /** Add Item from Category */
  async addItem(catId: string, itemId: string, user: SessionDTO): Promise<CategoryItemsDTO> {
    let category = await this.model.findOne({ _id: catId });
    this.checkCategory(category);
    await this.bsnService.validateOwner(user.id, category.businessId.toString());
    category.items.unshift({
      _id: itemId,
      rank: 0,
    });
    this.rerank(category.items);
    category = await (
      await category.save()
    )
      .populate({
        path: 'items._id',
        model: 'item',
      })
      .execPopulate();
    if (this.cleanNulls(category.items)) {
      this.rerank(category.items);
      await category.save();
    }
    return this.sanitizer.sanitizeItems(category);
  }

  /** Remove Item from Category */
  async removeItem(catId: string, itemId: string, user: SessionDTO): Promise<CategoryItemsDTO> {
    let category = await this.model.findOne({ _id: catId });
    this.checkCategory(category);
    await this.bsnService.validateOwner(user.id, category.businessId.toString());
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
      })
      .execPopulate();
    return this.sanitizer.sanitizeItems(category);
  }

  /** reorder the categories according to the order */
  async reorderItems(
    categorId: string,
    user: SessionDTO,
    reorderDTO: ReorderDTO,
  ): Promise<CategoryItemsDTO> {
    let category = await this.model.findOne({ _id: categorId });
    this.checkCategory(category);
    await this.bsnService.validateOwner(user.id, category.businessId.toString());
    this.checkBounds(reorderDTO.from, reorderDTO.to, category.items.length);
    const removedItems = category.items.splice(reorderDTO.from, 1);
    category.items.splice(reorderDTO.to, 0, removedItems[0]);
    this.rerank(category.items);
    category = await (
      await category.save()
    )
      .populate({
        path: 'items._id',
        model: 'item',
      })
      .execPopulate();
    return this.sanitizer.sanitizeItems(category);
  }

  // /** Remove the item from the whole system */
  // async deleteItem(itemId: string, user: SessionDTO): Promise<string> {
  //   const item = await this.itemService.getRaw(itemId);
  //   await this.bsnService.validateOwner(user.id, item.businessId);
  //   await Promise.all([
  //     this.itemService.delete(itemId, user.id),
  //     this.model.updateMany({}, { $pull: { items: { _id: itemId } } }),
  //   ]);
  //   return item._id;
  // }

  /** @return the items of this category */
  async getItems(categoryId: string): Promise<CategoryItemsDTO> {
    const category = await this.model.findById(categoryId).populate('items._id');
    return this.sanitizer.sanitizeItems(category);
  }

  /** @returns the raw category - for system use only, do not send to client */
  async getRaw(categoryId: string): Promise<ICategory> {
    return await this.model.findById(categoryId);
  }

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
      throw new HttpException('From value falls outside of the items list', HttpStatus.BAD_REQUEST);
    }
    if (to >= length || to < 0) {
      throw new HttpException('To value falls outside of the items list', HttpStatus.BAD_REQUEST);
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
