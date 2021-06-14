import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { CategoryType } from '../category.constants';

export class CreateCategoryDTO {
  @ApiProperty()
  @IsString()
  name: string;
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  description?: string;
  @ApiProperty({ enum: CategoryType })
  @IsEnum(CategoryType)
  type: CategoryType;
  @ApiProperty()
  businessId: string;

  /** Set by the server */
  userId: string;
}
