import { model, Schema, Types } from 'mongoose';
import { IMenu } from './interface';

const MenuSchema = new Schema({
  owner: { type: Types.ObjectId, ref: 'owner' },
  businessId: { type: Types.ObjectId, ref: 'business' },
  name: { type: String, required: true },
  tagline: { type: String },
  image: { type: Types.ObjectId, ref: 'image' },
  description: { type: String },
  isActive: { type: Boolean, required: true },
});

export const MenuModel = model<IMenu>('menu', MenuSchema);
