import { ApiProperty } from '@nestjs/swagger';
import { CategoryItemDTO } from './categoryItem.dto';

export class CategoryItemsDTO {
  @ApiProperty({ description: 'Category Id' })
  id: string;
  @ApiProperty({ type: [CategoryItemDTO] })
  items: CategoryItemDTO[];
}
