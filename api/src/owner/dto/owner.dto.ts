import { ApiProperty } from '@nestjs/swagger';

export class OwnerDTO {
  @ApiProperty()
  id: string;
  @ApiProperty()
  fullName: string;
  @ApiProperty()
  email: string;
  // @ApiProperty()
  // role: string;
}
