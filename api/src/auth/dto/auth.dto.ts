import { ApiProperty } from '@nestjs/swagger';
import { ClientRole } from '../constants';

export class AuthDTO {
  @ApiProperty()
  token: string;
  @ApiProperty({ enum: ClientRole })
  role: string;
}
