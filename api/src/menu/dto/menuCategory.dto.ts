import { ApiProperty } from '@nestjs/swagger';
import { CategoryDTO } from 'src/category';

export class MenuCategoryDTO {
  @ApiProperty()
  rank: number;
  @ApiProperty({ type: CategoryDTO })
  category: CategoryDTO;
}
