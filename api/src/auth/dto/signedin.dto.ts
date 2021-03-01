import { ApiProperty } from '@nestjs/swagger';
import { UserResponseDTO } from '../../user/dto';

export class SignedInDTO {
  constructor(accessToken: string, user: UserResponseDTO) {
    this.accessToken = accessToken;
    this.user = user;
  }
  @ApiProperty({ type: String })
  accessToken: string;
  @ApiProperty({ type: UserResponseDTO })
  user: UserResponseDTO;
}
