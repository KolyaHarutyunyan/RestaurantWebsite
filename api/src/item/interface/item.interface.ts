import { Document } from 'mongoose';
import { IImage } from '../../image';

export interface IItem extends Document {
  businessId: string;
  name: string;
  description?: string;
  option?: string;
  price: number;
  mainImage: string | IImage;
  images?: string[] | IImage[];
}
