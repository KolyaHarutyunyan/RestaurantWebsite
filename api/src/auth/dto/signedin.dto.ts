import { ApiProperty } from '@nestjs/swagger';
import { AuthDTO } from '.';
import { UserResponseDTO } from '../../user/dto';

export class SignedInDTO {
  constructor(auth: AuthDTO, user: UserResponseDTO) {
    this.auth  = auth;
    this.user = user;

  }
  @ApiProperty({ type: () => AuthDTO })
  auth:  AuthDTO;
  @ApiProperty()
  user: UserResponseDTO;
}
