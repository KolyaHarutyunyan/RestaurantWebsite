import { Document } from 'mongoose';
import { FileDTO } from 'src/components/file';

export interface IOwner extends Document {
  auth: string;
  fullName: string;
  email: string;
  phoneNumber?: string;
  avatar?: FileDTO;
  socialAvatar?: string;
  role: string;
}
