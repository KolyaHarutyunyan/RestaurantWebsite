import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class EditBusinessDTO {
  @ApiProperty()
  @IsNotEmpty()
  name?: string;

  @ApiProperty()
  @IsNotEmpty()
  description?: string;
  s;

  @ApiProperty()
  @IsNotEmpty()
  website?: string;

  @ApiProperty()
  @IsNotEmpty()
  phoneNumber?: string;

  @ApiProperty()
  @IsNotEmpty()
  status: string;

  @ApiProperty()
  @IsNotEmpty()
  logoUrl: string;
}
