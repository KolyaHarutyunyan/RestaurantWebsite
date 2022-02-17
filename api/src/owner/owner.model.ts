import { model, Schema, Types } from 'mongoose';
import { IOwner } from './interfaces';

const ownerSchema = new Schema({
  auth: { type: Types.ObjectId, required: true, ref: 'auth' },
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  avatar: { type: String },
});

export const OwnerModel = model<IOwner>('owner', ownerSchema);
