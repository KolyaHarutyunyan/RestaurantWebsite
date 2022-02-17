import { model, Schema, Types } from 'mongoose';
import { WeekSchema } from 'src/components/schedule';
import { addressSchema } from 'src/components/address';
import { BusinessStatus } from './business.constants';
import { IBusiness } from './interface';
import { FileSchema } from 'src/components/file';

const businessSchema = new Schema({
  owner: { type: Types.ObjectId, ref: 'user', required: true },
  name: { type: String, required: true },
  description: { type: String },
  logo: { type: Types.ObjectId, ref: 'image' },
  status: { type: String, enum: [BusinessStatus], required: true },
  menus: [{ type: Types.ObjectId, ref: 'menu' }],
  website: { type: String },
  phoneNumber: { type: String },
  address: addressSchema,
  hours: WeekSchema,
  qrUrl: FileSchema,
});

export const BusinessModel = model<IBusiness>('business', businessSchema);
