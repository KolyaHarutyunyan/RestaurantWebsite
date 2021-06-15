import { IsEnum } from 'class-validator';
import { CategoryType } from 'src/category';

export class CategoryQueryDTO {
  @IsEnum(CategoryType)
  type: CategoryType;
}
