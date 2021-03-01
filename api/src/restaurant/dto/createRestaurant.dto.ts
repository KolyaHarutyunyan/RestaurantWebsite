import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUrl } from 'class-validator';
import { IUser } from 'src/user/interfaces';

export class CreateRestaurantDTO {
  @ApiProperty()
  @IsNotEmpty()
  name: string;
  @ApiProperty({ required: false })
  description: string;
  @ApiProperty({ required: false })
  @IsUrl()
  logoUrl: string;

  //internally set
  user?: IUser;
}
