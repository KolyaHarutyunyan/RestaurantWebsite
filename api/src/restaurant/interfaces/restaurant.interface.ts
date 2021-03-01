import { Document } from 'mongoose';

export interface IRestaurant extends Document {
  owner: string;
  name: string;
  description?: string;
  logoUrl?: string;
}
