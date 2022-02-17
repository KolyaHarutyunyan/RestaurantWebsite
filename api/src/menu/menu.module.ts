import { Module } from '@nestjs/common';
import { BusinessModule } from 'src/business/business.module';
import { CategoryModule } from 'src/category/category.module';
import { FileModule } from 'src/components/file/file.module';
import { MenuSanitizer } from './menu.sanitizer';
import { MenuController } from './menu.controller';
import { MenuService } from './menu.service';

@Module({
  imports: [FileModule, BusinessModule, CategoryModule],
  controllers: [MenuController],
  providers: [MenuService, MenuSanitizer],
  exports: [MenuService],
})
export class MenuModule {}
