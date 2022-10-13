import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsPhoneNumber, IsString, Length } from 'class-validator';
import { SessionDTO } from 'src/auth';
import { FileDTO } from 'src/components/file';

export class CreateBusinessDTO {
  @ApiProperty()
  @IsString()
  @Length(2, 50)
  name: string;
  @ApiProperty()
  description: string;
  @ApiProperty({ type: FileDTO, required: false })
  logo: FileDTO;
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  website?: string;
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  facebook?: string;
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  instagram?: string;
  @ApiProperty({ required: false })
  @IsOptional()
  @IsPhoneNumber('US')
  phoneNumber?: string;
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  address?: string;

  /** Set by the system */
  user?: SessionDTO;
}
