import { ApiProperty } from '@nestjs/swagger';

export class ChangePassDTO {
  @ApiProperty()
  newPassword: string;
  @ApiProperty()
  confirmation: string;
}
