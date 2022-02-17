import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '../auth/auth.module';
import { DatabaseConnection } from './app.database';
import { OwnerModule } from '../owner/owner.module';
import { BusinessModule } from '../business/business.module';
import { MenuModule } from '../menu/menu.module';
import { ItemModule } from '../item/item.module';
import { CategoryModule } from '../category/category.module';
import { FileModule } from '../components/file/file.module';

@Module({
  imports: [
    AuthModule,
    OwnerModule,
    BusinessModule,
    MenuModule,
    ItemModule,
    CategoryModule,
    FileModule,
  ],
  controllers: [AppController],
  providers: [AppService, DatabaseConnection],
})
export class AppModule {}
