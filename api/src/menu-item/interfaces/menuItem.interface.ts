import { Document } from 'mongoose';

export interface IMenuItem extends Document {
  name: string;
  description?: string;
  option?: string;
  price: number;
  images: Array<Object>
}
