import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class SignupDTO {
  // email
  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  // fullName
  @ApiProperty({
    type: String,
    description: 'Lenght must be min 3 characters long',
  })
  @IsNotEmpty()
  @MinLength(3)
  fullName: string;

  // password
  @ApiProperty({
    type: String,
    description:
      'must be at least 8 characters long, contain 1 uppercase 1 lowercase',
  })
  @MinLength(8)
  @MaxLength(30)
  password: string;

  //internally generated
  authId?: string;
}
