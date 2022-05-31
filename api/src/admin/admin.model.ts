import { model, Schema, Types } from 'mongoose';
import { IAdmin } from './interface';

const adminSchema = new Schema({
  auth: { type: Types.ObjectId, required: true, ref: 'auth' },
  email: { type: String, required: true, unique: true },
});

export const AdminModel = model<IAdmin>('admin', adminSchema);
