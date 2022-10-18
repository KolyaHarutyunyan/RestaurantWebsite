import { Document } from 'mongoose';
import { FileDTO } from 'src/components/file';

export interface IItem extends Document {
  businessId: string;
  name: string;
  description?: string;
  option?: string;
  price: number;
  mainImage?: number;
  images?: FileDTO[];
  testWebhook: any;
  active: boolean;
}
