import { Document } from 'mongoose';
import { IItemImage } from './item-image.interface';

export interface IItem extends Document {
  businessId: string;
  name: string;
  description?: string;
  option?: string;
  price: number;
  mainImage: IItemImage;
  images?: IItemImage[];
}
