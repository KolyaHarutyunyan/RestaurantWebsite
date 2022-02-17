import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../constants';

export class AuthDTO {
  @ApiProperty()
  role: Role;
}
