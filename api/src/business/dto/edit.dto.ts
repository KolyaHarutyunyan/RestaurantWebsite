import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsPhoneNumber } from 'class-validator';
import { SessionDTO } from 'src/auth';
import { FileDTO } from 'src/components/file';
import { WeekDTO } from 'src/components/schedule';

export class EditBusinessDTO {
  @ApiProperty({ required: false })
  name?: string;
  @ApiProperty({ required: false })
  description?: string;
  @ApiProperty({ type: FileDTO, required: false })
  @IsOptional()
  logo?: FileDTO;
  @ApiProperty({ required: false })
  website?: string;
  @ApiProperty({ required: false })
  @IsOptional()
  @IsPhoneNumber('US')
  phoneNumber?: string;
  @ApiProperty({ required: false })
  address?: string;
  @ApiProperty({ required: false })
  @IsOptional()
  removeLogo?: boolean;
  @ApiProperty({ type: WeekDTO, required: false })
  @IsOptional()
  hours?: WeekDTO;
  /** Set by the system */
  user: SessionDTO;
}
