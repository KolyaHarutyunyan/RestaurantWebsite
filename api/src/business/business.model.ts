import { model, Schema, Types } from 'mongoose';
import { addressSchema } from '../address';
import { WorkDayStatus, BusinessStatus } from './business.constants';
import { IBusiness } from './interface';

const workDaySchema = new Schema(
  {
    status: { type: String, enum: [WorkDayStatus] },
    hours: [{ open: String, close: String, _id: false }],
  },
  { _id: false },
);

const workWeekSchema = new Schema(
  {
    mon: workDaySchema,
    tue: workDaySchema,
    wed: workDaySchema,
    thr: workDaySchema,
    fri: workDaySchema,
    sat: workDaySchema,
    sun: workDaySchema,
  },
  { _id: false },
);

const businessSchema = new Schema({
  owner: { type: Types.ObjectId, ref: 'user', required: true },
  name: { type: String, required: true },
  description: { type: String },
  logoUrl: { type: String },
  status: { type: String, enum: [BusinessStatus], required: true },
  menus: [{ type: Types.ObjectId, ref: 'menu' }],
  website: { type: String },
  phoneNumber: { type: String },
  address: addressSchema,
  hours: workWeekSchema,
  qrUrl: { type: String, required: true, unique: true },
});

export const BusinessModel = model<IBusiness>('business', businessSchema);
