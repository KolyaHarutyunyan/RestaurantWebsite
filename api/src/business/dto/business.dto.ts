import { ApiProperty } from '@nestjs/swagger';
import { AddressDTO } from 'src/components/address';
import { BusinessStatus } from '../business.constants';
import { FileDTO } from 'src/components/file';
import { WeekDTO } from 'src/components/schedule';
import { OwnerDTO } from 'src/owner/dto';

export class BusinessDTO {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty({ enum: BusinessStatus, required: true })
  status: BusinessStatus;
  @ApiProperty({ required: false })
  description?: string;
  @ApiProperty({ type: FileDTO, required: false })
  logo?: FileDTO;
  @ApiProperty({ required: false })
  website?: string;
  @ApiProperty({ required: false })
  facebook?: string;
  @ApiProperty({ required: false })
  instagram?: string;
  @ApiProperty({ type: AddressDTO, required: false })
  address?: AddressDTO;
  @ApiProperty({ required: false })
  phoneNumber?: string;
  @ApiProperty({ type: WeekDTO, required: false })
  hours?: WeekDTO;
  @ApiProperty({ type: FileDTO })
  qr: FileDTO;
  @ApiProperty({ required: false })
  ownerId?: string;
  @ApiProperty({ required: false })
  ownerName?: string;
}
