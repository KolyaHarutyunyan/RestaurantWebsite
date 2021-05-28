import { Document } from 'mongoose';

export interface IBusiness extends Document {
  [x: string]: any;
  owner: string;
  name: string;
  description?: string;
  logoUrl?: string;
  status: boolean;
  website?: string;
  phoneNumber?: string;
}
