import { model, Schema, Types } from 'mongoose';
import { CategoryType } from './category.constants';
import { ICategory } from './interface';

const categorySchema = new Schema({
  businessId: { type: Types.ObjectId, ref: 'business', required: true },
  name: { type: String, required: true },
  description: { type: String },
  items: [{ type: Types.ObjectId, ref: 'item' }],
  type: { type: String, enum: CategoryType },
});

export const CategoryModel = model<ICategory>('category', categorySchema);
