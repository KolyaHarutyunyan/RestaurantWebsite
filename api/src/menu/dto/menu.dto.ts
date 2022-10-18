import { ApiProperty } from '@nestjs/swagger';
import { FileDTO } from 'src/components/file';
import { ItemDTO } from 'src/item';

export class MenuItemDTO {
  @ApiProperty()
  id: string;
  @ApiProperty({ type: ItemDTO })
  item: ItemDTO;
}
export class CategoryDTO {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty({ type: [MenuItemDTO] })
  items: MenuItemDTO[];
}

export class MenuDTO {
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
  @ApiProperty()
  isActive: boolean;
  @ApiProperty({ type: [CategoryDTO], required: false })
  food?: CategoryDTO[];
  @ApiProperty({ type: [CategoryDTO], required: false })
  drinks?: CategoryDTO[];
  updatedDate: Date;
}
