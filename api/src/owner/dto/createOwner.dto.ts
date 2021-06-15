import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { Role } from 'src/auth';

export class CreateOwnerDTO {
  // fullName
  @ApiProperty({
    type: String,
    description: 'Lenght must be min 3 characters long',
  })
  @MinLength(2)
  fullName: string;
  // email
  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsEmail()
  email: string;
  // password
  @ApiProperty({
    type: String,
    description:
      'must be at least 8 characters long, contain 1 uppercase 1 lowercase',
  })
  @MinLength(8)
  @MaxLength(30)
  password: string;

  /** Set by the system */
  id?: string;
  role?: Role;
}
