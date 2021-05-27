import { model, Schema } from 'mongoose';
import { IOwner } from './interfaces';

const ownerSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

export const OwnerModel = model<IOwner>('owner', ownerSchema);
