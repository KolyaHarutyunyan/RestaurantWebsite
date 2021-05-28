import { Document } from 'mongoose';
import { IHours } from './hours.interface';

export interface IBusiness extends Document {
  owner: string;
  name: string;
  description: string;
  logoUrl: string;
  status: boolean;
  menus: string[];
  website: string;
  phoneNumber: string;
  hours: IHours[];
}
