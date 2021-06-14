import { ApiProperty } from '@nestjs/swagger';
import { CategoryType } from '../category.constants';
import { CategoryItemRO } from './categoryItem.ro';

export class CategoryRO {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty({ enum: CategoryType })
  type: CategoryType;
  @ApiProperty()
  description?: string;
  @ApiProperty({ type: [String] })
  items?: string[] | CategoryItemRO[];
}
