import { ApiProperty } from '@nestjs/swagger';

export class ImageDTO {
  @ApiProperty()
  id: string;
  @ApiProperty()
  originalUrl: string;
}
