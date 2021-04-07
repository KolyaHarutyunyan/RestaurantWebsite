import { ApiProperty } from '@nestjs/swagger';

// Sent to the client
export class PassChangedDTO {
  constructor(token: string) {
    this.accessToken = token;
  }
  @ApiProperty({ description: 'Updated access token' })
  accessToken: string;
}
