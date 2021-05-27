import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UpdateUsertDTO {
  @ApiProperty()
  fullName?: string;

  @ApiProperty()
  @IsNotEmpty()
  email: string;

  authId?: string;

  phoneNumber?: string;

  // role?: string;
}
