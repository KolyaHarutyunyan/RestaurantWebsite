import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { ImageModule } from '../image/image.module';

@Module({
  imports: [ImageModule],
  controllers: [MenuController],
  providers: [MenuService]
})
export class MenuModule {}
