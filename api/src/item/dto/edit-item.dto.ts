import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsOptional, Length } from 'class-validator';

export class EditItemDTO {
  @ApiProperty({ required: false })
  name?: string;
  @ApiProperty({ required: false })
  description?: string;
  @ApiProperty({ required: false })
  option?: string;
  @ApiProperty({ required: false })
  @IsOptional()
  @Type(() => Number)
  price?: number;
  @ApiProperty()
  @IsNotEmpty()
  businessId: string;
  @ApiProperty()
  mainImage?: string;
  @ApiProperty()
  images?: string[];

  /** set by the system */
  userId: string;
}
