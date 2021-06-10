import { Document } from 'mongoose';
import { CategoryType } from '../category.constants';

export interface ICategory extends Document {
  name: string;
  description?: string;
  items: string[];
  type: CategoryType;
  businessId: string;
  ownerId: string;
}
