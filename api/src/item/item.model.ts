import { model, Schema, Types } from 'mongoose';
import { IItem } from './interface';

const itemImageSchema = new Schema({
  url: { type: String, required: true },
  thumbURL: { type: String, required: true },
});

const itemSchema = new Schema({
  businessId: { type: Types.ObjectId, ref: 'business' },
  name: { type: String, required: true },
  description: { type: String },
  option: { type: String },
  price: { type: Number, required: true },
  mainImage: itemImageSchema,
  images: [itemImageSchema],
});

export const ItemModel = model<IItem>('item', itemSchema);
