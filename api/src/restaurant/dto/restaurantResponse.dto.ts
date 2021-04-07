import { ApiProperty } from '@nestjs/swagger';

export class RestaurantResponseDTO {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  description?: string;
  @ApiProperty()
  logoUrl?: string;
}
