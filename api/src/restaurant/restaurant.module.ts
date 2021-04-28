import { Module } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { RestaurantController } from './restaurant.controller';
import { ImageModule } from '../image/image.module';

@Module({
  imports: [ImageModule],
  providers: [RestaurantService],
  controllers: [RestaurantController],
})
export class RestaurantModule {}
