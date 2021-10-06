import { ApiProperty } from '@nestjs/swagger';
import { CategoryItemsDTO } from '../../category';
// import { ImageDTO } from '../../image';

export class FullMenuDTO {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  tagline?: string;
  @ApiProperty()
  description?: string;
  @ApiProperty()
  image?: string;
  @ApiProperty({ type: [CategoryItemsDTO] })
  foodCategories: CategoryItemsDTO[];
  @ApiProperty({ type: [CategoryItemsDTO] })
  drinkCategories: CategoryItemsDTO[];
}
