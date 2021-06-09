import { Module } from '@nestjs/common';
import { ImageModule } from '../image';
import { BusinessModule } from '../business';
import { ItemSanitizer } from './interceptor/sanitizer.interceptor';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';

@Module({
  imports: [BusinessModule, ImageModule],
  controllers: [ItemController],
  providers: [ItemService, ItemSanitizer],
})
export class ItemModule {}
