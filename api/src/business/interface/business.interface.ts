import { Document } from 'mongoose';
import { IWeek } from 'src/components/schedule';
import { FileDTO } from 'src/components/file';
import { IAddress } from 'src/components/address';
import { BusinessStatus } from '../business.constants';
import { IMenu } from 'src/menu/interface';

export interface IBusiness extends Document {
  owner: string;
  name: string;
  description: string;
  logo: FileDTO;
  status: BusinessStatus;
  menus: IMenu[];
  website: string;
  facebook: string;
  instagram: string;
  phoneNumber: string;
  address: IAddress;
  hours?: IWeek;
  qr: FileDTO;
}
