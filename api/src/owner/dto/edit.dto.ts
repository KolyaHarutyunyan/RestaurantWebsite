import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsUrl, Length } from 'class-validator';
import { SessionDTO } from 'src/auth';
import { FileDTO } from 'src/components/file';

export class EditOwnerDTO {
  @ApiProperty()
  @IsOptional()
  @Length(2, 20)
  fullName?: string;
  @ApiProperty()
  @IsOptional()
  @IsEmail()
  email?: string;
  @ApiProperty({ type: FileDTO, required: false })
  avatar?: FileDTO;

  /** Set by the system */
  user?: SessionDTO;
}
