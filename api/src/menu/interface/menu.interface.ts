import { Document } from 'mongoose';
import { IImage } from '../../image';
import { IMenuCategory } from './menuCategories.interface';

export interface IMenu extends Document {
  owner: string;
  businessId: string;
  name: string;
  tagline?: string;
  image?: string | IImage;
  description?: string;
  drinkCategories: IMenuCategory[];
  foodCategories: IMenuCategory[];
  isActive: boolean;
}
