import { Document } from 'mongoose';
import { IItem } from '../../item';
import { CategoryType } from '../category.constants';

export interface ICategory extends Document {
  name: string;
  description?: string;
  items: string[] & IItem[];
  type: CategoryType;
  businessId: string;
  ownerId: string;
}
