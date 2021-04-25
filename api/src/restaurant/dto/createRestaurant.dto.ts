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

  //internally set
  // restaurantOwner?: IUser;
  status?: boolean;

  website?: string;
  phoneNumber?: string
}
