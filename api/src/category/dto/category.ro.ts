import { ApiProperty } from '@nestjs/swagger';
import { ItemDTO } from 'src/item/dto';
import { CategoryType } from '../category.constants';

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
  items?: string[] | ItemDTO[];
}
