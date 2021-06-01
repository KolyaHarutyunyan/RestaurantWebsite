import { model, Schema, Types } from 'mongoose';
import { IMenu } from './interface';

const MenuSchema = new Schema({
  businessId: { type: Types.ObjectId, ref: 'business' },
  name: { type: String, required: true },
  tagline: { type: String },
  imageUrl: { type: String },
  description: { type: String },
  foodCategories: [{ type: Types.ObjectId, ref: 'category' }],
  drinkCategories: [{ type: Types.ObjectId, ref: 'category' }],
  isActive: { type: Boolean, required: true },
});

export const MenuModel = model<IMenu>('menu', MenuSchema);
