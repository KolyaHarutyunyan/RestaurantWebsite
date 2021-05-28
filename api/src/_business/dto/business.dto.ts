import { ApiProperty } from '@nestjs/swagger';

export class BusinessDTO {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  description?: string;
  @ApiProperty()
  logoUrl?: string;
}
