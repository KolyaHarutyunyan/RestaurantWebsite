import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { ItemDTO } from 'src/item/dto';
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
  @IsString()
  type: CategoryType;
  @ApiProperty()
  businessId: string;

  /** Set by the server */
  userId: string;
}
