import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class BusinessInfoDTO {
  @ApiProperty()
  @IsNotEmpty()
  name: string;
  @ApiProperty({ required: false })
  @IsOptional()
  description: string;
  @ApiProperty({ type: 'file', format: 'binary' })
  logo: string;
  @ApiProperty({
    type: Boolean,
    description:
      'If the business logo needs to be removed, set to true, otherwise leave empty',
  })
  @IsOptional()
  shouldRemoveLogo?: boolean;

  /** Set by the authGuard */
  userId: string;
}
