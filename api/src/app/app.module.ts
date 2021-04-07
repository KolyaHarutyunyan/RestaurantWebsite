import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '../auth/auth.module';
import { DatabaseConnection } from './app.database';
import { UserModule } from '../user/user.module';
import { RestaurantModule } from 'src/restaurant/restaurant.module';

@Module({
  imports: [AuthModule, UserModule, RestaurantModule],
  controllers: [AppController],
  providers: [AppService, DatabaseConnection],
})
export class AppModule {}
