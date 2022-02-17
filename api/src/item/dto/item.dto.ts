import { ApiProperty } from '@nestjs/swagger';
import { FileDTO } from 'src/components/file';

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
  @ApiProperty({ type: FileDTO })
  mainImage?: FileDTO;
  @ApiProperty({ type: [FileDTO] })
  images?: FileDTO[];
}
