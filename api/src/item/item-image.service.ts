import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BusinessValidator } from 'src/business';
import { IImage, ImageService } from 'src/image';
import { CreateItemDTO, EditItemDTO, ItemDTO } from './dto';
import { ItemSanitizer } from './interceptor/sanitizer.interceptor';
import { IItem, IItemImage } from './interface';
import { ItemModel } from './item.model';

@Injectable()
export class ItemImageService {
  constructor(
    private readonly sanitizer: ItemSanitizer,
    private readonly bsnValidator: BusinessValidator,
    private readonly imageService: ImageService,
  ) {
    this.model = ItemModel;
  }
  private model: Model<IItem>;

  /** Uploads a new image */
  /** Sets the main image of the menu item to a new image */
  async changeMainImage(
    itemId: string,
    imageId: string,
    ownerId: string,
  ): Promise<ItemDTO> {
    let item = await this.model.findById(itemId);
    this.checkItem(item);
    await this.bsnValidator.validateBusiness(ownerId, item.businessId);
    const newImages: IItemImage[] = [];
    let newMainImage: IItemImage;
    for (let i = 0; i < item.images.length; i++) {
      if (item.images[i]._id === imageId) {
        newMainImage = item.images[i];
      } else {
        newImages.push(item.images[i]);
      }
    }
    this.checkImage(newMainImage);
    item.mainImage = newMainImage;
    item.images = newImages;
    item = await item.save();
    return this.sanitizer.sanitize(item);
  }

  /** Delete an image */
  async deleteImage(
    itemId: string,
    imageId: string,
    ownerId: string,
  ): Promise<ItemDTO> {
    let item = await this.model.findById(itemId);
    this.checkItem(item);
    await this.bsnValidator.validateBusiness(ownerId, item.businessId);
    let imageToDelete: IItemImage;
    // Check if the image is the main image
    if (item.mainImage?._id === imageId) {
      imageToDelete = item.mainImage;
      // Image was the main image, delete it and replace with the
      if (item.images && item.images.length > 0) {
        item.mainImage = item.images.shift();
      } else {
        item.mainImage = undefined;
      }
    } else {
      // This means that the image was not the main image, seach and remove from the regular images
      for (let i = 0; i < item.images.length; i++) {
        if (item.images[i]._id === imageId) {
          imageToDelete = item.images[i];
          item.images.splice(i, 1);
          break;
        }
      }
    }
    /** Delete the images from image storage */
    this.imageService.deleteImages([imageToDelete.url, imageToDelete.thumbURL]);
    item = await item.save();
    return this.sanitizer.sanitize(item);
  }

  /** Add Images */
  async addImage(
    itemId: string,
    ownerId: string,
    image: any,
  ): Promise<ItemDTO> {
    let item = await this.model.findById(itemId);
    await this.bsnValidator.validateBusiness(ownerId, item.businessId);
    this.checkMaxCount(item);
    const itemImage = (await this.saveImages([image]))[0];
    if (!item.mainImage) {
      // no main image exists, add this to the main image
      item.mainImage = itemImage;
    } else {
      item.images.push(itemImage);
    }
    item = await item.save();
    return this.sanitizer.sanitize(item);
  }

  /** Uploads multiple images async */
  async saveImages(images: any[]): Promise<IItemImage[]> {
    if (!images || images.length < 1) return null;
    const uploadedImages: IItemImage[] = [];
    // Step 1: create an array of promises from images
    const promises = [];
    for (let i = 0; i < images.length; i++) {
      promises.push(this.imageService.saveWithThumb(images[i]));
    }
    // Step 2: run all the promises in parallel
    const response: IImage[] = await Promise.all(promises);
    // Step 3: from the reponse, create image objects
    for (let i = 0; i < response.length; i++) {
      uploadedImages.push(this.createImage(response[i]));
    }
    return uploadedImages;
  }

  /** Private Methods */
  /** creates and @returns image objects */
  private createImage(image: IImage): IItemImage {
    return {
      url: image.originalUrl,
      thumbURL: image.thumbUrl,
    };
  }

  /** checks if the item was found*/
  private checkItem(item) {
    if (!item) {
      throw new HttpException('Item was not found', HttpStatus.NOT_FOUND);
    }
  }

  /** Check Image */
  private checkImage(image) {
    if (!image) {
      throw new HttpException('Image was not found', HttpStatus.NOT_FOUND);
    }
  }

  /** Check if the max image count has been reached */
  private checkMaxCount(item: IItem) {
    if (item.mainImage && item.images.length >= 5) {
      throw new HttpException(
        'The maximum amount of images has been reached',
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
  }
}
