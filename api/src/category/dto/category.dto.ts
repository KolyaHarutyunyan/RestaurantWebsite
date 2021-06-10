import { ApiProperty } from '@nestjs/swagger';
import { CategoryType } from '../category.constants';

export class CategoryDTO {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty({ enum: CategoryType })
  type: CategoryType;
  @ApiProperty()
  description?: string;
  @ApiProperty({ type: [String] })
  items?: string[];
}
