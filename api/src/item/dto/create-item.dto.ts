import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, Length } from 'class-validator';

export class CreateItemDTO {
  @ApiProperty()
  @IsNotEmpty()
  name: string;
  @ApiProperty({ required: false })
  description?: string;
  @ApiProperty()
  @Type(() => Number)
  //   @Length(4, 4)
  price: number;
  @ApiProperty({ required: false })
  option?: string;
  @ApiProperty({ type: 'string', format: 'binary', required: false })
  mainImage?: any;
  @ApiProperty({ type: ['string'], format: 'binary', required: false })
  images?: any;
  @ApiProperty()
  @IsNotEmpty()
  businessId: string;

  /** set by the system */
  userId: string;
}
