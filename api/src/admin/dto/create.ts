import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, Length } from 'class-validator';

export class CreateAdminDTO {
  @ApiProperty()
  code: string;
  @ApiProperty()
  @IsEmail()
  email: string;
  @ApiProperty({ minLength: 5, maxLength: 20 })
  @Length(5, 20)
  password: string;
}
