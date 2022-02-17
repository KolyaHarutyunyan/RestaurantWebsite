import { Module } from '@nestjs/common';
import { BusinessModule } from '../business/business.module';
import { ItemModule } from '../item/item.module';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { CategorySanitizer } from './category.sanitizer';

@Module({
  imports: [ItemModule, BusinessModule],
  controllers: [CategoryController],
  providers: [CategoryService, CategorySanitizer],
  exports: [CategorySanitizer, CategoryService],
})
export class CategoryModule {}
