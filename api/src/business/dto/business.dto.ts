import { ApiProperty } from '@nestjs/swagger';
import { ImageDTO } from '../../image';
import { AddressDTO } from '../../address';
import { BusinessStatus } from '../business.constants';
import { WorkWeekDTO } from './workWeek.dto';

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
  logo?: ImageDTO;
  @ApiProperty({ required: false })
  website?: string;
  @ApiProperty({ type: AddressDTO, required: false })
  address?: AddressDTO;
  @ApiProperty({ required: false })
  phoneNumber?: string;
  @ApiProperty({ type: [WorkWeekDTO], required: false })
  hours?: WorkWeekDTO;
  @ApiProperty()
  qrUrl: string;
}
