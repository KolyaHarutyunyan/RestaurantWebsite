import { Document } from 'mongoose';
import { FileDTO } from 'src/components/file';
import { IMenuCategory } from './menuCategories.interface';

export interface IMenu extends Document {
  owner: string;
  businessId: string;
  name: string;
  tagline?: string;
  image?: FileDTO;
  description?: string;
  drinkCategories: IMenuCategory[];
  foodCategories: IMenuCategory[];
  isActive: boolean;
}
