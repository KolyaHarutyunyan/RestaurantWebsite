import { Injectable } from '@nestjs/common';
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
    private readonly businessValidator: BusinessValidator,
    private readonly itemImageService: ItemImageService,
  ) {
    this.model = ItemModel;
  }
  private model: Model<IItem>;

  /** Public API */
  create = async (itemDTO: CreateItemDTO): Promise<ItemDTO> => {
    await this.businessValidator.validateBusiness(
      itemDTO.userId,
      itemDTO.businessId,
    );
    let item = new this.model({
      name: itemDTO.name,
      description: itemDTO.description,
      price: itemDTO.price,
      option: itemDTO.option,
    });
    const [mainImage, images] = await Promise.all([
      this.itemImageService.saveImage(itemDTO.mainImage),
      this.itemImageService.saveImages(itemDTO.images),
    ]);
    item.mainImage = mainImage;
    item.images = images;
    item = await item.save();
    return this.sanitizer.sanitize(item);
  };

  /** Edit the menu item info */
  edit = async (itemId: string, itemDTO: EditItemDTO): Promise<ItemDTO> => {
    let [, item] = await Promise.all([
      this.businessValidator.validateBusiness(
        itemDTO.userId,
        itemDTO.businessId,
      ),
      this.model.findById(itemId),
    ]);
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

  /** Private Methods */
}
