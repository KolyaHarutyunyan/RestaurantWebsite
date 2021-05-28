import { Document } from 'mongoose';

export interface IMenu extends Document {
  [x: string]: any;
  // businessId: string;
  name: string;
  tagline?: string;
  imageUrl?: string;
  description?: string;
  foodCategories: Array<Object>;
  drinkCategories: Array<Object>;
  isActive: Boolean;
}
