import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { MailerModule } from '../components/mailer';
import { AuthController } from './auth.controller';
import { AuthSanitizer } from './auth.sanitizer';
import { AuthService } from './auth.service';
import { AuthGuard, ResetPassGuard } from './guards';
import { AppleStrategy, FacebookStrategy, GoogleStrategy, TwitterStrategy } from './strategies';

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
