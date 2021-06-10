import { ApiProperty } from '@nestjs/swagger';
import { CategoryDTO } from '../../category/dto';
import { ImageDTO } from 'src/image';

export class MenuDTO {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  tagline?: string;
  @ApiProperty()
  description?: string;
  @ApiProperty()
  image?: ImageDTO;
  @ApiProperty()
  isActive: boolean;
  @ApiProperty({ type: [CategoryDTO] })
  foodCategories: CategoryDTO[];
  @ApiProperty({ type: [CategoryDTO] })
  drinkCategories: CategoryDTO[];
}
