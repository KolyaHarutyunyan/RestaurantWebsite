import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { BusinessModule } from 'src/business/business.module';
import { OwnerSanitizer } from './owner.sanitizer';
import { OwnerController } from './owner.controller';
import { OwnerService } from './owner.service';
import { SocialController } from './social.controller';

@Module({
  imports: [AuthModule, BusinessModule],
  controllers: [OwnerController, SocialController],
  providers: [OwnerService, OwnerSanitizer],
})
export class OwnerModule {}
