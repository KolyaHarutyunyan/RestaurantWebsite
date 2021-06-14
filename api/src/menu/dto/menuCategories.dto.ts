import { ApiProperty } from '@nestjs/swagger';
import { MenuCategoryDTO } from './menuCategory.dto';

export class MenuCategoriesDTO {
  @ApiProperty()
  id: string;
  @ApiProperty({ type: [MenuCategoryDTO] })
  food: MenuCategoryDTO[];
  @ApiProperty({ type: [MenuCategoryDTO] })
  drink: MenuCategoryDTO[];
}
