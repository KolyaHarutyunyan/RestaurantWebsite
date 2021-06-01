import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '../auth/auth.module';
import { DatabaseConnection } from './app.database';
import { OwnerModule } from '../owner';
import { BusinessModule } from 'src/business';
import { MenuModule } from 'src/menu';

@Module({
  imports: [AuthModule, OwnerModule, BusinessModule, MenuModule],
  controllers: [AppController],
  providers: [AppService, DatabaseConnection],
})
export class AppModule {}
