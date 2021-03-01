import { model, Schema } from 'mongoose';
import { IUser } from './interfaces/';

const UserSchema = new Schema({
  authId: { type: String, required: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

export const UserModel = model<IUser>('user', UserSchema);
