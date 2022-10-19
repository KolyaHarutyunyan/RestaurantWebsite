import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BusinessService } from '../business/business.service';
import { CreateItemDTO, EditItemDTO, ItemDTO } from './dto';
import { ItemSanitizer } from './item.sanitizer';
import { IItem } from './interface';
import { ItemModel } from './item.model';
import { SessionDTO } from 'src/auth';
import { FileService } from 'src/components/file/file.service';
import { FileDTO } from 'src/components/file';

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
      note: dto.note ? dto.note : undefined,
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
    if (dto.active) item.active = dto.active;
    if (dto.note) item.note = dto.note;

    await this.manageImages(item, dto);
    item = await item.save();
    return this.sanitizer.sanitize(item);
  }

  /** Gets all items in the system without their items */
  async getAll(businessId: string): Promise<ItemDTO[]> {
    const items = await this.model.find({ businessId: businessId });
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
  // private async manageImages(item: IItem, dto: EditItemDTO) {
  //   if (dto.mainImage) item.mainImage = dto.mainImage;
  //   if (dto.imagesToAdd) dto.imagesToAdd.map((image) => item.images.push(image));
  //   if (dto.imagesToRemove) {
  //     const idsToRemove = dto.imagesToRemove.map((image) => image.id);
  //     await this.fileService.deleteFiles(dto.user.id, idsToRemove);
  //     let imageIndex;
  //     for (let i = 0; i < idsToRemove.length; i++) {
  //       imageIndex = item.images.findIndex((image) => image.id === idsToRemove[i]);
  //       if (imageIndex > -1) {
  //         item.images.splice(imageIndex, 1);
  //       }
  //       if (idsToRemove[i] === item.mainImage.id) {
  //         if (item.images.length > 0) item.mainImage = item.images[0];
  //       }
  //     }
  //   }
  // }

  /** Updates the event images */
  private async manageImages(item: IItem, dto: EditItemDTO) {
    const newImages: FileDTO[] = [];
    const idsToRemove = [];
    dto.imagesToAdd?.forEach((img) => item.images.push(img));
    dto.imagesToRemove?.forEach((img) => idsToRemove.push(img.id));
    if (idsToRemove.length > 0) await this.fileService.deleteFiles(dto.user.id, idsToRemove);
    let imageIndex;
    for (let i = 0; i < item.images?.length; i++) {
      // check if this image needs to be deleted
      imageIndex = idsToRemove.findIndex((id) => item.images[i].id === id);
      if (imageIndex < 0) {
        //does not need to be deleted
        newImages.push(item.images[i]);
      } else {
        //needs to be deleted
        if (item.mainImage > i) {
          item.mainImage = item.mainImage - 1;
        } else if (item.mainImage === i) {
          item.mainImage = 0;
        }
      }
    }
    if (newImages.length < 1) item.mainImage = undefined;
    item.images = newImages;
    //Set the main image
    if (dto.mainImage || !(dto.mainImage < 0 || dto.mainImage >= item.images.length)) {
      item.mainImage = dto.mainImage;
    }
  }
}
