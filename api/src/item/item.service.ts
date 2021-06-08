import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BusinessValidator } from 'src/business';
import { CreateItemDTO, EditItemDTO, ItemDTO } from './dto';
import { ItemSanitizer } from './interceptor/sanitizer.interceptor';
import { IItem } from './interface';
import { ItemImageService } from './item-image.service';
import { ItemModel } from './item.model';

@Injectable()
export class ItemService {
  constructor(
    private readonly sanitizer: ItemSanitizer,
    private readonly bsnValidator: BusinessValidator,
    private readonly itemImageService: ItemImageService,
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
    let item = new this.model({
      name: itemDTO.name,
      description: itemDTO.description,
      price: itemDTO.price,
      option: itemDTO.option,
    });
    if (item.images && item.images.length > 0) {
      const images = await this.itemImageService.saveImages(itemDTO.images);
      item.mainImage = images.shift();
      item.images = images;
    }
    item = await item.save();
    return this.sanitizer.sanitize(item);
  };

  /** Edit the menu item info */
  edit = async (itemId: string, itemDTO: EditItemDTO): Promise<ItemDTO> => {
    let item = await this.model.findById(itemId);
    await this.bsnValidator.validateBusiness(itemDTO.userId, item.businessId);
    if (itemDTO.name) {
      item.name = itemDTO.name;
    }
    if (itemDTO.description) {
      item.description = itemDTO.description;
    }
    if (itemDTO.option) {
      item.option = itemDTO.option;
    }
    if (itemDTO.description) {
      item.price = itemDTO.price;
    }
    item = await item.save();
    return this.sanitizer.sanitize(item);
  };

  /** Delets an item with a given id */
  delete = async (id: string, ownerId: string) => {
    let item = await this.model.findById(id);
    this.checkItem(item);
    await this.bsnValidator.validateBusiness(ownerId, item.businessId);
    item = await this.model.findOneAndDelete({ _id: id });
    if (item) {
      return item._id;
    } else {
      throw new HttpException('Item was not found', HttpStatus.NOT_FOUND);
    }
  };

  /** Private Methods */
  private checkItem(item) {
    if (!item) {
      throw new HttpException('item was not found', HttpStatus.NOT_FOUND);
    }
  }
}
