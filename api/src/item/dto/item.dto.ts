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
  @ApiProperty({ type: Number, required: false })
  mainImage?: number;
  @ApiProperty({ type: [FileDTO] })
  images?: FileDTO[];
  @ApiProperty()
  active: boolean;
  @ApiProperty()
  note: string;
}
