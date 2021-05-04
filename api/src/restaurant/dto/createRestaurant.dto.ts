import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUrl } from 'class-validator';
import { IUser } from 'src/user/interfaces';

export class CreateRestaurantDTO {
  @ApiProperty()
  @IsNotEmpty()
  ownerId: string;

  @ApiProperty()
  @IsNotEmpty()
  name: string;
  @ApiProperty({ required: false })
  description: string;

  @ApiProperty({ required: false })
  logoUrl: string;

  @ApiProperty({ required: false })
  QR: string;
  //internally set
  // restaurantOwner?: IUser;
  status?: boolean;

  @ApiProperty({ required: false })
  website?: string;

  @ApiProperty({ required: false })
  phoneNumber?: string;

  @ApiProperty({ required: true })
  day: Date;

  @ApiProperty({ required: true })
  open: string;

  @ApiProperty({ required: true })
  close: Date
}
