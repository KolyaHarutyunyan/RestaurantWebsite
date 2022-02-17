import { model, Schema, Types } from 'mongoose';
import { FileSchema } from 'src/components/file';
import { IOwner } from './interfaces';

const ownerSchema = new Schema({
  auth: { type: Types.ObjectId, required: true, ref: 'auth' },
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  avatar: FileSchema,
});

export const OwnerModel = model<IOwner>('owner', ownerSchema);
