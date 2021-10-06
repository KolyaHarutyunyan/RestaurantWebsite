import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsOptional, IsPhoneNumber } from 'class-validator';
import { WorkWeekDTO } from './workWeek.dto';

export class EditBusinessDTO {
  @ApiProperty({ required: false })
  name?: string;
  @ApiProperty({ required: false })
  description?: string;
  @ApiProperty({ required: false })
  @IsOptional()
  @IsMongoId()
  logo?: string;
  @ApiProperty({ required: false })
  website?: string;
  @ApiProperty({ required: false })
  @IsOptional()
  @IsPhoneNumber('US')
  phoneNumber?: string;
  @ApiProperty({ required: false })
  address?: string;
  // @ApiProperty({ required: false })
  // removeLogo?: boolean;
  @ApiProperty({ required: false })
  hours: WorkWeekDTO;
  /** Set by the system */
  userId: string;
}
