import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '../auth/auth.module';
import { DatabaseConnection } from './app.database';
import { OwnerModule } from '../owner';
import { BusinessModule } from '../business';
import { MenuModule } from '../menu';
import { ItemModule } from '../item';
import { ImageModule } from '../image';
import { CategoryModule } from '../category';

@Module({
  imports: [
    AuthModule,
    OwnerModule,
    BusinessModule,
    MenuModule,
    ItemModule,
    ImageModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService, DatabaseConnection],
})
export class AppModule {}
