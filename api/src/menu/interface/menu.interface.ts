import { Document } from 'mongoose';
import { IImage } from '../../image';

export interface IMenu extends Document {
  owner: string;
  businessId: string;
  name: string;
  tagline?: string;
  image?: string | IImage;
  description?: string;
  isActive: boolean;
}
