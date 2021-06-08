import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AddItemImagesDTO {
  @ApiProperty()
  @IsNotEmpty()
  itemId: string;
  @ApiProperty({ type: ['string'], format: 'binary' })
  @IsNotEmpty()
  images: any;
  /** Set by the syetem */
  userId: string;
}
