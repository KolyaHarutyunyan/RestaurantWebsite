import { ApiProperty } from '@nestjs/swagger';

export class ItemImageDTO {
  @ApiProperty()
  order: number;
  @ApiProperty()
  originalUrl: string;
  @ApiProperty()
  thumbUrl: string;
}
