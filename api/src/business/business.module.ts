import { Module } from '@nestjs/common';
import { AddressModule } from 'src/address';
import { ImageModule } from 'src/image';
import { BusinessController } from './business.controller';
import { BusinessService } from './business.service';
import { BusinessValidator } from './interceptor';
import { BusinessSanitizer } from './interceptor/sanitizer.interceptor';

@Module({
  imports: [ImageModule, AddressModule],
  controllers: [BusinessController],
  providers: [BusinessService, BusinessSanitizer, BusinessValidator],
  exports: [BusinessService, BusinessValidator],
})
export class BusinessModule {}
