import { Document } from 'mongoose';

export interface IOwner extends Document {
  auth: string;
  fullName: string;
  email: string;
  phoneNumber?: string;
  avatar?: string;
  role: string;
}
