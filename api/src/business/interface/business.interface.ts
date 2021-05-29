import { Document } from 'mongoose';
import { BusinessStatus } from '../business.constants';
import { IHours } from './hours.interface';

export interface IBusiness extends Document {
  owner: string;
  name: string;
  description: string;
  logoUrl: string;
  status: BusinessStatus;
  menus: string[];
  website: string;
  phoneNumber: string;
  address: string;
  hours: IHours[];
  qrUrl: string;
}
