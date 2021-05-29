import { ApiProperty } from '@nestjs/swagger';

export class BusinessHoursDTO {
  @ApiProperty({ required: true })
  day: string;
  @ApiProperty({ required: true })
  open: string;
  @ApiProperty({ required: true })
  close: string;
}
