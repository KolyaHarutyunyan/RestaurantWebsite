import { Module } from '@nestjs/common';
import { BusinessModule } from '../business';
import { ItemModule } from '../item';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { CategorySanitizer } from './interceptor/sanitizer.interceptor';

@Module({
  imports: [ItemModule, BusinessModule],
  controllers: [CategoryController],
  providers: [CategoryService, CategorySanitizer],
  exports: [CategorySanitizer, CategoryService],
})
export class CategoryModule {}
