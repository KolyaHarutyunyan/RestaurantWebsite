import { Module } from '@nestjs/common';
import { ImageModule } from 'src/image';
import { BusinessController } from './business.controller';
import { BusinessService } from './business.service';
import { BusinessSanitizer } from './interceptor/sanitizer.interceptor';

@Module({
  imports: [ImageModule],
  controllers: [BusinessController],
  providers: [BusinessService, BusinessSanitizer],
})
export class BusinessModule {}
