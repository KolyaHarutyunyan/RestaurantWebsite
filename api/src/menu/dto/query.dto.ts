import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { CategoryType } from '../menu.constants';

export class GetQueryDTO {
  businessId: string;
  active: boolean;
}

export class CategoryQueryDTO {
  @ApiProperty({ enum: CategoryType })
  @IsEnum(CategoryType)
  type: CategoryType;
}
