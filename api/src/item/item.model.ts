import { model, Schema, Types } from 'mongoose';
import { FileSchema } from 'src/components/file';
import { IItem } from './interface';

const itemSchema = new Schema({
  businessId: { type: Types.ObjectId, ref: 'business', required: true },
  name: { type: String, required: true },
  description: { type: String },
  note: { type: String },
  option: { type: String },
  price: { type: Number },
  mainImage: Number,
  active: { type: Boolean, default: true },
  images: [FileSchema],
  testWebhook: [],
});

export const ItemModel = model<IItem>('item', itemSchema);
