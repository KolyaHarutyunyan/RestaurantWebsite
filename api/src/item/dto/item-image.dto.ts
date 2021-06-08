import { ApiProperty } from '@nestjs/swagger';

export class ItemImageDTO {
  @ApiProperty()
  id: string;
  @ApiProperty()
  originalUrl: string;
  @ApiProperty()
  thumbUrl: string;
}
