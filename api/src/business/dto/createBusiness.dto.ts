import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class CreateBusinessDTO {
  @ApiProperty()
  @IsString()
  @Length(2, 50)
  name: string;
  @ApiProperty()
  description: string;
  @ApiProperty({ type: 'string', format: 'binary' })
  logo: any;

  /** Set by the system */
  userId?: string;
}
