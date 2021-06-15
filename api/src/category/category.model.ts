import { model, Schema, Types } from 'mongoose';
import { ICategory } from './interface';

const categoryItemSchema = new Schema({
  rank: Number,
  _id: { type: Types.ObjectId, ref: 'item' },
});

const categorySchema = new Schema({
  businessId: { type: Types.ObjectId, ref: 'business', required: true },
  ownerId: { type: Types.ObjectId },
  name: { type: String, required: true },
  description: { type: String },
  items: [categoryItemSchema],
});

export const CategoryModel = model<ICategory>('category', categorySchema);
