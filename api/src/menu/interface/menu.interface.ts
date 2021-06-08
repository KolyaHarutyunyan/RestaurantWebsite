import { Document } from 'mongoose';

export interface IMenu extends Document {
  businessId: string;
  name: string;
  tagline?: string;
  imageUrl?: string;
  description?: string;
  foodCategories: Array<string>;
  drinkCategories: Array<string>;
  isActive: boolean;
}
