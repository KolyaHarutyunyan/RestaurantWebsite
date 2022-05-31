import { ApiProperty } from '@nestjs/swagger';

export class AdminDTO {
  @ApiProperty()
  email: string;
}
