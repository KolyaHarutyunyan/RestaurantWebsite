import { Document } from 'mongoose';

export interface IRestaurant extends Document {
  [x: string]: any;
  owner: string;
  name: string;
  description?: string;
  logoUrl?: string;
  status: boolean;
  website?: string;
  phoneNumber?: string;
}
