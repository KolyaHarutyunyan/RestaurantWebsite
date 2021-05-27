import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
// import { SocialController } from './social.controller';
import { MailerModule } from '../mailer';
import {
  TwitterStrategy,
  FacebookStrategy,
  GoogleStrategy,
} from './strategies';

@Module({
  exports: [AuthService],
  imports: [MailerModule],
  providers: [AuthService, FacebookStrategy, TwitterStrategy, GoogleStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
