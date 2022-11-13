import { Document } from 'mongoose';
import { FileDTO } from 'src/components/file';
import { IItem } from 'src/item';

export interface IMenu extends Document {
  owner: string;
  businessId: string;
  name: string;
  tagline?: string;
  image?: FileDTO;
  description?: string;
  drinks: IMenuCategory[];
  food: IMenuCategory[];
  isActive: boolean;
  updatedDate: Date;
}

export interface IMenuCategory extends Document {
  name: string;
  description: string;
  active: boolean;
  items: IMenuItem[];
}

export interface IMenuItem extends Document {
  item: string | IItem;
}
