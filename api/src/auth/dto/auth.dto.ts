import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../constants';
import { IAuth } from '../interfaces';

export class AuthDTO {
  constructor(auth: IAuth) {
    this.accessToken = auth.session;
    this.role = auth.role;
  }
  @ApiProperty()
  accessToken: string;
  @ApiProperty()
  role: Role;
}
