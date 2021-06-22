import { Document } from 'mongoose';

export interface IOwner extends Document {
  fullName: string;
  email: string;
  phoneNumber?: string;
  avatarUrl?: string;
  role: string;
}
