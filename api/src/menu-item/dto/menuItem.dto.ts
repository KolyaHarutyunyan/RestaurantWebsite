import { ApiProperty } from '@nestjs/swagger';

export class MenuItemResponseDTO {
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
  @ApiProperty()
  images?: string;
}