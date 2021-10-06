import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsUrl, Length } from 'class-validator';

export class EditOwnerDTO {
  @ApiProperty()
  @IsOptional()
  @Length(2, 20)
  fullName?: string;
  @ApiProperty()
  @IsOptional()
  @IsEmail()
  email?: string;
  @ApiProperty()
  @IsOptional()
  @IsUrl()
  avatarURL: string;

  /** Set by the system */
  userId?: string;
}
