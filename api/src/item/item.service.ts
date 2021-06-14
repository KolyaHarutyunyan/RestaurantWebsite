import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ImageService } from '../image';
import { BusinessValidator } from '../business';
import { CreateItemDTO, EditItemDTO, ItemDTO } from './dto';
import { ItemSanitizer } from './interceptor';
import { IItem } from './interface';
import { ItemModel } from './item.model';

@Injectable()
export class ItemService {
  constructor(
    private readonly sanitizer: ItemSanitizer,
    private readonly bsnValidator: BusinessValidator,
    private readonly imageService: ImageService,
  ) {
    this.model = ItemModel;
  }
  private model: Model<IItem>;

  /** Public API */
  create = async (itemDTO: CreateItemDTO): Promise<ItemDTO> => {
    await this.bsnValidator.validateBusiness(
      itemDTO.userId,
      itemDTO.businessId,
    );
    let item = await new this.model({
      name: itemDTO.name,
      description: itemDTO.description,
      price: itemDTO.price,
      option: itemDTO.option,
      mainImage: itemDTO.mainImage,
      images: itemDTO.images,
      businessId: itemDTO.businessId,
    });
    item = await (await item.save())
      .populate('mainImage')
      .populate('images')
      .execPopulate();
    return this.sanitizer.sanitize(item);
  };

  /** Edit the menu item info */
  edit = async (itemId: string, itemDTO: EditItemDTO): Promise<ItemDTO> => {
    let item = await this.model.findById(itemId);
    this.checkItem(item);
    await this.bsnValidator.validateBusiness(itemDTO.userId, item.businessId);
    if (itemDTO.name) item.name = itemDTO.name;
    if (itemDTO.description) item.description = itemDTO.description;
    if (itemDTO.option) item.option = itemDTO.option;
    if (itemDTO.description) item.price = itemDTO.price;
    if (itemDTO.mainImage) item.mainImage = itemDTO.mainImage;
    if (itemDTO.images) item.images = itemDTO.images;
    item = await (await item.save())
      .populate('mainImage')
      .populate('images')
      .execPopulate();
    return this.sanitizer.sanitize(item);
  };

  /** Delets an item with a given id */
  delete = async (id: string, ownerId: string): Promise<IItem> => {
    let item = await this.model.findById(id);
    this.checkItem(item);
    await this.bsnValidator.validateBusiness(ownerId, item.businessId);
    const imageIds = item.images as string[];
    if (item.mainImage) imageIds.push(item.mainImage as string);
    this.imageService.removeMany(imageIds, ownerId);
    item = await item.delete();
    return item;
  };

  /** Private Methods */
  private checkItem(item) {
    if (!item) {
      throw new HttpException('item was not found', HttpStatus.NOT_FOUND);
    }
  }
}
