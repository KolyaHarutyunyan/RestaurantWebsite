import { Module } from '@nestjs/common';
import { BusinessModule } from '../business/business.module';
import { ItemSanitizer } from './item.sanitizer';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';
import { FileModule } from 'src/components/file/file.module';

@Module({
  imports: [BusinessModule, FileModule],
  controllers: [ItemController],
  providers: [ItemService, ItemSanitizer],
  exports: [ItemService, ItemSanitizer],
})
export class ItemModule {}
