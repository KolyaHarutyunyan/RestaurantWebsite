import { Module } from '@nestjs/common';
import { BusinessModule } from 'src/business/business.module';
import { FileModule } from 'src/components/file/file.module';
import { MenuSanitizer } from './menu.sanitizer';
import { MenuController } from './menu.controller';
import { MenuService } from './menu.service';
import { ItemModule } from 'src/item/item.module';
import { CategoryController } from './category.controller';

@Module({
  imports: [FileModule, BusinessModule, ItemModule],
  controllers: [MenuController, CategoryController],
  providers: [MenuService, MenuSanitizer],
  exports: [MenuService],
})
export class MenuModule {}
