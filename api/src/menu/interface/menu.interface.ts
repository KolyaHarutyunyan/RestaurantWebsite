import { Document } from 'mongoose';

export interface IMenu extends Document {
  // businessId: string;
  name: string;
  tagline?: string;
  imageUrl?: string;
  description?: string;
  foodCategories: Array<any>;
  drinkCategories: Array<any>;
  isActive: boolean;
}
