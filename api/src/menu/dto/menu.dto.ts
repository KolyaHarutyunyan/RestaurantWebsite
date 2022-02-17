import { ApiProperty } from '@nestjs/swagger';
import { FileDTO } from 'src/components/file';

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
}
