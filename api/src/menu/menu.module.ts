import { Module } from '@nestjs/common';
import { BusinessModule } from 'src/business';
import { ImageModule } from 'src/image';
import { MenuSanitizer } from './interceptor';
import { MenuController } from './menu.controller';
import { MenuService } from './menu.service';

@Module({
  imports: [ImageModule, BusinessModule],
  controllers: [MenuController],
  providers: [MenuService, MenuSanitizer],
})
export class MenuModule {}
