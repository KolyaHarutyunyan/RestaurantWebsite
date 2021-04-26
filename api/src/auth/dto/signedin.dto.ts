import { ApiProperty } from '@nestjs/swagger';
import { AuthDTO } from '.';
import { UserResponseDTO } from '../../user/dto';

export class SignedInDTO {
  constructor(auth: AuthDTO, user: UserResponseDTO) {
  }
  @ApiProperty()
  auth: () => AuthDTO;
  @ApiProperty()
  user: () => UserResponseDTO;
}
