import { Module } from '@nestjs/common';
import { ImageModule } from 'src/image';
import { BusinessController } from './business.controller';
import { BusinessService } from './business.service';

@Module({
  imports: [ImageModule],
  controllers: [BusinessController],
  providers: [BusinessService],
})
export class BusinessModule {}
