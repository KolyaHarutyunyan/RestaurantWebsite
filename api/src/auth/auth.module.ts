import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MailerModule } from '../mailer';
import {
  TwitterStrategy,
  FacebookStrategy,
  GoogleStrategy,
  AppleStrategy,
} from './strategies';
import { AuthSanitizer } from './interceptor';

@Module({
  exports: [AuthService, AppleStrategy],
  imports: [MailerModule],
  providers: [
    AuthService,
    FacebookStrategy,
    TwitterStrategy,
    GoogleStrategy,
    AuthSanitizer,
    AppleStrategy,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
