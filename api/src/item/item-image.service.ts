import { Injectable } from '@nestjs/common';
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
    private readonly businessValidator: BusinessValidator,
    private readonly imageService: ImageService,
  ) {
    this.model = ItemModel;
  }
  private model: Model<IItem>;


  /** Uploads a new image */

  /** Sets the main image of the menu item to a new image */
  setMainImage = async (itemId: string): Promise<ItemDTO> => {
    const item = await this.model.findById(itemId);
    return this.sanitizer.sanitize(item);
  };

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
    console.log(response);
    // Step 3: from the reponse, create image objects
    for (let i = 0; i < response.length; i++) {
      uploadedImages.push(this.createImage(response[i]));
    }
    return uploadedImages;
  }

  /** uploads one image */
  async saveImage(image: any): Promise<IItemImage> {
    if (!image) return null;
    const imageResponse: IImage = await this.imageService.saveWithThumb(image);
    return this.createImage(imageResponse);
  }

  /** Private Methods */
  /** creates and @returns image objects */
  private createImage(image: IImage): IItemImage {
    return {
      url: image.originalUrl,
      thumbURL: image.thumbUrl,
    };
  }
}
