import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class CreateBusinessDTO {
  @ApiProperty()
  @IsString()
  @Length(2, 50)
  name: string;
  @ApiProperty()
  description: string;
  @ApiProperty({ required: false })
  logo: string;

  /** Set by the system */
  userId?: string;
}
