import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { BusinessModule } from 'src/business/business.module';
import { OwnerSanitizer } from './owner.sanitizer';
import { OwnerController } from './owner.controller';
import { OwnerService } from './owner.service';
import { SocialController } from './social.controller';
import { FileModule } from 'src/components/file/file.module';

@Module({
  imports: [AuthModule, BusinessModule, FileModule],
  controllers: [OwnerController, SocialController],
  providers: [OwnerService, OwnerSanitizer],
  exports: [OwnerService],
})
export class OwnerModule {}
