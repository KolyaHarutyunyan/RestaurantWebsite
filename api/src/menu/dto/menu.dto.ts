import { ApiProperty } from '@nestjs/swagger';
// import { CategoryRO } from '../../category';
import { ImageDTO } from '../../image';
import { MenuCategoryRO } from './menuCategory.ro';

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
  @ApiProperty({ type: [MenuCategoryRO] })
  foodCategories: MenuCategoryRO[];
  @ApiProperty({ type: [MenuCategoryRO] })
  drinkCategories: MenuCategoryRO[];
}
