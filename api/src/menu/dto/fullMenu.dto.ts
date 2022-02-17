import { ApiProperty } from '@nestjs/swagger';
import { FileDTO } from 'src/components/file';
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
  @ApiProperty({ type: FileDTO, required: false })
  image?: FileDTO;
  @ApiProperty({ type: [CategoryItemsDTO] })
  foodCategories: CategoryItemsDTO[];
  @ApiProperty({ type: [CategoryItemsDTO] })
  drinkCategories: CategoryItemsDTO[];
}
