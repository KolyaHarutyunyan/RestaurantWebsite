import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BusinessService } from '../business/business.service';
import { CreateItemDTO, EditItemDTO, ItemDTO } from './dto';
import { ItemSanitizer } from './item.sanitizer';
import { IItem } from './interface';
import { ItemModel } from './item.model';
import { SessionDTO } from 'src/auth';
import { FileService } from 'src/components/file/file.service';

@Injectable()
export class ItemService {
  constructor(
    private readonly sanitizer: ItemSanitizer,
    private readonly bsnService: BusinessService,
    private readonly fileService: FileService,
  ) {
    this.model = ItemModel;
  }
  private model: Model<IItem>;

  /** Public API */
  /** Create a new item */
  async create(dto: CreateItemDTO): Promise<ItemDTO> {
    await this.bsnService.validateOwner(dto.user.id, dto.businessId.toString());
    const item = await new this.model({
      name: dto.name,
      description: dto.description,
      price: dto.price,
      option: dto.option,
      mainImage: dto.mainImage,
      images: dto.images,
      businessId: dto.businessId,
    });
    await item.save();
    return this.sanitizer.sanitize(item);
  }

  /** Edit the menu item info */
  async edit(itemId: string, dto: EditItemDTO): Promise<ItemDTO> {
    let item = await this.model.findById(itemId);
    this.checkItem(item);
    await this.bsnService.validateOwner(dto.user.id, item.businessId.toString());
    if (dto.name) item.name = dto.name;
    if (dto.description) item.description = dto.description;
    if (dto.option) item.option = dto.option;
    if (dto.price) item.price = dto.price;
    await this.manageImages(item, dto);
    item = await item.save();
    return this.sanitizer.sanitize(item);
  }

  /** Gets all items in the system without their items */
  async getAll(businessId: string): Promise<ItemDTO[]> {
    const items = await this.model
      .find({ businessId: businessId })
      .populate('images')
      .populate('mainImage');
    return this.sanitizer.sanitizeMany(items);
  }

  /** @returns one item given its item id */
  async get(itemId: string): Promise<ItemDTO> {
    const item = await this.model.findById(itemId);
    this.checkItem(item);
    return this.sanitizer.sanitize(item);
  }

  /** Get the item in its raw form */
  async getRaw(itemId: string): Promise<IItem> {
    const item = await this.model.findById(itemId);
    return item;
  }

  /** Delets an item with a given id */
  async delete(id: string, user: SessionDTO): Promise<IItem> {
    let item = await this.model.findById(id);
    this.checkItem(item);
    await this.bsnService.validateOwner(user.id, item.businessId.toString());
    if (item.images && item.images.length > 0) {
      const imageIds = item.images.map((image) => image.id);
      if (item.mainImage) imageIds.push(item.mainImage.id);
      await this.fileService.deleteFiles(user.id, imageIds);
    }
    item = await item.delete();
    return item;
  }

  /** Private Methods */
  private checkItem(item) {
    if (!item) {
      throw new HttpException('item was not found', HttpStatus.NOT_FOUND);
    }
  }

  /** Manage the images of the item */
  private async manageImages(item: IItem, dto: EditItemDTO) {
    if (dto.mainImage) item.mainImage = dto.mainImage;
    if (dto.imagesToAdd) dto.imagesToAdd.map((image) => item.images.push(image));
    if (dto.imagesToRemove) {
      const idsToRemove = dto.imagesToRemove.map((image) => image.id);
      await this.fileService.deleteFiles(dto.user.id, idsToRemove);
      let imageIndex;
      for (let i = 0; i < idsToRemove.length; i++) {
        imageIndex = item.images.findIndex((image) => image.id === idsToRemove[i]);
        if (imageIndex > -1) {
          item.images.splice(imageIndex, 1);
        }
        if (idsToRemove[i] === item.mainImage.id) {
          if (item.images.length > 0) item.mainImage = item.images[0];
        }
      }
    }
  }
}
