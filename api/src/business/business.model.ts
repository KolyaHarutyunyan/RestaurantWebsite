import { model, Schema, Types } from 'mongoose';
import { WeekSchema } from 'src/components/schedule';
import { addressSchema } from 'src/components/address';
import { BusinessStatus } from './business.constants';
import { IBusiness } from './interface';
import { FileSchema } from 'src/components/file';

const businessSchema = new Schema({
  owner: { type: Types.ObjectId, ref: 'owner', required: true },
  name: { type: String, required: true },
  description: { type: String },
  logo: FileSchema,
  status: { type: String, enum: [BusinessStatus], required: true },
  menus: [{ type: Types.ObjectId, ref: 'menu' }],
  website: { type: String },
  facebook: { type: String },
  instagram: { type: String },
  phoneNumber: { type: String },
  address: addressSchema,
  hours: WeekSchema,
  qr: FileSchema,
});

export const BusinessModel = model<IBusiness>('business', businessSchema);
