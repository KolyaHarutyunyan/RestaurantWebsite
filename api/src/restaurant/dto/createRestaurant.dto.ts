import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsUrl } from 'class-validator';
import { IUser } from 'src/user/interfaces';

export class CreateRestaurantDTO {
  // @ApiProperty()
  // @IsNotEmpty()
  // ownerId: string;

  @ApiProperty()
  @IsNotEmpty()
  name: string;
  @ApiProperty({ required: false })
  description: string;

  @ApiProperty({ required: false })
  @IsNotEmpty()
  logoUrl: string;

  @ApiProperty({ required: false })
  QR: string;
  //internally set
  // restaurantOwner?: IUser;
  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  status: boolean;

  @ApiProperty({ required: false })
  website?: string;

  @ApiProperty({ required: false })
  phoneNumber?: string;

  @ApiProperty({ required: true })
  day: Date;

  @ApiProperty({ required: true })
  open: string;

  @ApiProperty({ required: true })
  close: string;
}
