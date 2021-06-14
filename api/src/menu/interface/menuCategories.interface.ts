import { ICategory } from '../../category';

export interface IMenuCategory {
  _id: string | ICategory;
  rank: number;
}
