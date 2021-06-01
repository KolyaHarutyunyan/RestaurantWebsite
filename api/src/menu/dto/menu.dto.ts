import { ApiProperty } from '@nestjs/swagger';

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
  imageUrl?: string;
  @ApiProperty()
  isActive: boolean;
}
