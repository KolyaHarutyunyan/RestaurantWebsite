import { Module } from '@nestjs/common';
import { AddressModule } from 'src/components/address/address.module';
import { BusinessController } from './business.controller';
import { BusinessService } from './business.service';
import { BusinessSanitizer } from './business.sanitizer';
import { FileModule } from 'src/components/file/file.module';
import { ScheduleModule } from 'src/components/schedule/schedule.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [FileModule, AddressModule, ScheduleModule, AuthModule],
  controllers: [BusinessController],
  providers: [BusinessService, BusinessSanitizer],
  exports: [BusinessService],
})
export class BusinessModule {}
