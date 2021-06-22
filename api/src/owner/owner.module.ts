import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth';
import { BusinessModule } from 'src/business';
import { OwnerSanitizer } from './interceptor';
import { OwnerController } from './owner.controller';
import { OwnerService } from './owner.service';
import { SocialController } from './social.controller';

@Module({
  imports: [AuthModule, BusinessModule],
  controllers: [OwnerController, SocialController],
  providers: [OwnerService, OwnerSanitizer],
})
export class OwnerModule {}