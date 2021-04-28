import { ApiProperty } from '@nestjs/swagger';

export class MenuResponseDTO {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  tagline?: string;
  @ApiProperty()
  description?: string;
  @ApiProperty()
  menuImg?: string;
  @ApiProperty()
  isActive: Boolean;
}
