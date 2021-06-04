import { ApiProperty } from '@nestjs/swagger';
import { ItemImageDTO } from './item-image.dto';

export class ItemDTO {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  description?: string;
  @ApiProperty()
  option?: string;
  @ApiProperty()
  price: number;
  @ApiProperty({ type: [ItemImageDTO] })
  images?: ItemImageDTO[];
}
