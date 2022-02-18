import { ApiProperty } from '@nestjs/swagger';

export class ReorderDTO {
  @ApiProperty()
  from: number;
  @ApiProperty()
  to: number;
}
