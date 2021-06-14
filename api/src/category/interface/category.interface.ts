import { Document } from 'mongoose';
import { CategoryType } from '../category.constants';
import { ICategoryItem } from './categoryItem.interface';

export interface ICategory extends Document {
  name: string;
  description?: string;
  items: ICategoryItem[];
  type: CategoryType;
  businessId: string;
  ownerId: string;
}
