import { ApiProperty } from '@nestjs/swagger';
import { CategoryItemDTO } from './categoryItem.dto';

export class CategoryItemsDTO {
  @ApiProperty({ description: 'Category Id' })
  id: string;
  @ApiProperty({ required: false, description: 'Category Name' })
  name?: string;
  @ApiProperty({ type: [CategoryItemDTO] })
  items: CategoryItemDTO[];
}
