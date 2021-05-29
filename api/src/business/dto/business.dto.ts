import { ApiProperty } from '@nestjs/swagger';
import { BusinessStatus } from '../business.constants';
import { BusinessHoursDTO } from './hours.dto';

export class BusinessDTO {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty({ enum: BusinessStatus, required: true })
  status: BusinessStatus;
  @ApiProperty({ required: false })
  description?: string;
  @ApiProperty({ required: false })
  logoUrl?: string;
  @ApiProperty({ required: false })
  website?: string;
  @ApiProperty({ required: false })
  address?: string;
  @ApiProperty({ required: false })
  phoneNumber?: string;
  @ApiProperty({ type: [BusinessHoursDTO], required: false })
  hours?: BusinessHoursDTO[];
  @ApiProperty()
  qrUrl: string;
}
