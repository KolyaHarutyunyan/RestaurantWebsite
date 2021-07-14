import { Document } from 'mongoose';
import { IImage } from 'src/image';
import { IAddress } from '../../address';
import { BusinessStatus } from '../business.constants';
import { IWorkWeek } from './workWeek.interface';

export interface IBusiness extends Document {
  owner: string;
  name: string;
  description: string;
  logo: string | IImage;
  status: BusinessStatus;
  menus: string[];
  website: string;
  phoneNumber: string;
  address: IAddress;
  hours?: IWorkWeek;
  qrUrl: string;
}
