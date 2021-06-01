import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UpdateMenuDTO {
  @ApiProperty()
  @IsNotEmpty()
  businessId: string;

  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ required: false })
  tagline: string;

  @ApiProperty({ required: false })
  menuImage: string;

  @ApiProperty({ required: false })
  description: string;

  @ApiProperty({ required: false })
  foodCategories: Array<any>;

  @ApiProperty({ required: false })
  drinkCategories: Array<any>;

  @ApiProperty()
  isActive: boolean;
}
