import { ApiProperty } from '@nestjs/swagger';
import { access } from 'fs';
import { IUser } from '../../user/interfaces';

export class ChangePassDTO {
  @ApiProperty()
  password: string;
  @ApiProperty()
  newPassword: string;
  @ApiProperty()
  confirmation: string;

  user: IUser;
}

// Sent to the client
export class PassChangedDTO {
  constructor(token: string) {
    this.accessToken = token;
  }
  @ApiProperty({ description: 'Updated access token' })
  accessToken: string;
}
