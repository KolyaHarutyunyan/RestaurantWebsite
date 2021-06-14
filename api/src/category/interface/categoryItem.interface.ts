import { IItem, ItemDTO } from '../../item';

export interface ICategoryItem {
  _id: string | IItem;
  rank: number;
  item?: ItemDTO;
}
