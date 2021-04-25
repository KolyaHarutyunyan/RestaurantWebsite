import { model, Schema,Types } from 'mongoose';
import { ICategory } from './interfaces/';

const CategorySchema = new Schema({
  name: { type: String, required: true },
  menuItems: [{ type: Types.ObjectId, ref: 'menuItem' }]
});

export const CategoryModel = model<ICategory>(
  'category',
  CategorySchema,
);
