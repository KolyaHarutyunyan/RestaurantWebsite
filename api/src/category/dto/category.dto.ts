import { ApiProperty } from '@nestjs/swagger';
// import { CategoryType } from '../category.constants';
// import { CategoryItemDTO } from './categoryItem.dto';

export class CategoryDTO {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  // @ApiProperty()
  // description?: string;
}