import { model, Schema, Types } from 'mongoose';
import { FileDTO } from 'src/components/file';
import { IItem } from './interface';

const itemSchema = new Schema({
  businessId: { type: Types.ObjectId, ref: 'business', required: true },
  name: { type: String, required: true },
  description: { type: String },
  option: { type: String },
  price: { type: Number },
  mainImage: FileDTO,
  images: [FileDTO],
});

export const ItemModel = model<IItem>('item', itemSchema);
