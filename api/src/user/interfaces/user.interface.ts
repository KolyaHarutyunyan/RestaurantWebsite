import { Document } from 'mongoose';

export interface IUser extends Document {
  authId: string;
  fullName: string;
  email: string;
  phoneNumber?: string;
  avatarUrl?: string;
  role: string;
}
