import { model, Schema, Types } from 'mongoose';
import { BusinessStatus } from './business.constants';
import { IBusiness } from './interface';

const hourSchema = new Schema({
  day: { type: Date },
  open: { type: String },
  close: { type: String },
});

const businessSchema = new Schema({
  owner: { type: Types.ObjectId, ref: 'user' },
  name: { type: String, required: true },
  description: { type: String },
  logoUrl: { type: String },
  status: { type: String, enum: [BusinessStatus], required: true },
  menus: [{ type: Types.ObjectId, ref: 'menu' }],
  website: { type: String },
  phoneNumber: { type: String },
  address: { type: String },
  hours: [hourSchema],
  qrUrl: { type: String, required: true, unique: true },
});

export const BusinessModel = model<IBusiness>('business', businessSchema);
