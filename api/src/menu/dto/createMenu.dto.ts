import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateMenuDTO {
  @ApiProperty()
  @IsNotEmpty()
  businessId: string;

  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ required: false })
  description: string;

  @ApiProperty({ required: false })
  mainImage: string;

  /** Set by server */
  userId: string;
}
