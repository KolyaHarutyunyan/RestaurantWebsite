import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UpdateMenuDTO {
  @ApiProperty()
  @IsNotEmpty()
  businessId: string;
  @ApiProperty({ required: false })
  name?: string;
  @ApiProperty({ required: false })
  tagline?: string;
  @ApiProperty({ required: false })
  description?: string;
  @ApiProperty({ required: false })
  menuImage?: string;
  @ApiProperty({ required: false })
  removeImage?: boolean;

  /** Set by the system */
  userId?: string;
}
