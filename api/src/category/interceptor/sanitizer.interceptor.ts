import { Injectable } from '@nestjs/common';
import { ISanitize } from 'src/util';
import { CategoryDTO } from '../dto/category.dto';
import { ICategory } from '../interface';

@Injectable()
export class CategorySanitizer implements ISanitize {
  sanitize(category: ICategory): CategoryDTO {
    const sanitized: CategoryDTO = {
      id: category._id,
      name: category.name,
      type: category.type,
      items: category.items,
    };

    return sanitized;
  }
}
