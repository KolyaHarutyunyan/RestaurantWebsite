import { ApiProperty } from '@nestjs/swagger';

export class UserDTO {
  @ApiProperty()
  id: string;
  @ApiProperty()
  fullName: string;
  @ApiProperty()
  email: string;
  // @ApiProperty()
  // role: string;
}
