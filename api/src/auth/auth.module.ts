import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MailerModule } from '../components/mailer';
import { TwitterStrategy, FacebookStrategy, GoogleStrategy, AppleStrategy } from './strategies';
import { AuthSanitizer } from './auth.sanitizer';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './guards';

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
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
  controllers: [AuthController],
})
export class AuthModule {}
