import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDTO {
  @ApiProperty()
  id: string;
  @ApiProperty()
  fullName: string;
  @ApiProperty()
  email: string;
}
