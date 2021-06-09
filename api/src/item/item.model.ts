import { model, Schema, Types } from 'mongoose';
import { IItem } from './interface';

const itemSchema = new Schema({
  businessId: { type: Types.ObjectId, ref: 'business' },
  name: { type: String, required: true },
  description: { type: String },
  option: { type: String },
  price: { type: Number, required: true },
  mainImage: { type: Types.ObjectId, ref: 'image' },
  images: [{ type: Types.ObjectId, ref: 'image' }],
});

export const ItemModel = model<IItem>('item', itemSchema);
