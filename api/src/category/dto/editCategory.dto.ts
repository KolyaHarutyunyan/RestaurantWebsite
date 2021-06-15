import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { CategoryType } from '../category.constants';

export class EditCategoryDTO {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  name?: string;
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  description?: string;
  // @ApiProperty({ enum: CategoryType, required: false })
  // @IsOptional()
  // @IsString()
  // type?: CategoryType;
  // @ApiProperty({ required: false, description: 'item id to add' })
  // addItem?: string;
  // @ApiProperty({ required: false, description: 'item id to remove' })
  // removeItem?: string;

  /** Set by the server */
  userId: string;
}
