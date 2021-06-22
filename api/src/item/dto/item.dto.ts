import { ApiProperty } from '@nestjs/swagger';
import { ImageDTO } from 'src/image';

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
  @ApiProperty({ type: ImageDTO })
  mainImage?: ImageDTO;
  @ApiProperty({ type: [ImageDTO] })
  images?: ImageDTO[];
}
