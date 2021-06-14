import { ApiProperty } from '@nestjs/swagger';
import { ImageDTO } from '../../image';

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
}
