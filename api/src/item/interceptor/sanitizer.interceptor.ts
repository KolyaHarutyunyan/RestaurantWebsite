import { ISanitize } from '../../util';
import { ItemDTO } from '../dto';
import { IItem } from '../interface';
import { ImageDTO, IImage } from '../../image';

export class ItemSanitizer implements ISanitize {
  sanitize(item: IItem): ItemDTO {
    const sanitizedItem: ItemDTO = {
      id: item.id,
      name: item.name,
      price: item.price,
    };
    if (item.description) {
      sanitizedItem.description = item.description;
    }
    if (item.option) {
      sanitizedItem.option = item.option;
    }
    if (item.mainImage) {
      sanitizedItem.mainImage = this.sanitizeImages([
        item.mainImage as IImage,
      ])[0];
    }
    if (item.images && item.images.length > 0) {
      sanitizedItem.images = this.sanitizeImages(item.images as IImage[]);
    }
    return sanitizedItem;
  }

  sanitizeMany(items: IItem[]): ItemDTO[] {
    const sanitizedItems: ItemDTO[] = [];
    for (let i = 0; i < items.length; i++) {
      sanitizedItems.push(this.sanitize(items[i]));
    }
    return sanitizedItems;
  }

  /** Private Methods */
  private sanitizeImages(images: IImage[]): ImageDTO[] {
    const sanitizedImages: ImageDTO[] = [];
    for (let i = 0; i < images.length; i++) {
      sanitizedImages.push({
        id: images[i]._id,
        originalUrl: images[i].originalUrl,
      });
    }
    return sanitizedImages;
  }
}
