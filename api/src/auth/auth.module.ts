import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { SocialController } from './social.controller';
import { MailerModule } from '../mailer';
import {
  TwitterStrategy,
  FacebookStrategy
} from './strategies';
@Module({
  imports: [UserModule,MailerModule],
  providers: [AuthService, FacebookStrategy, TwitterStrategy],
  controllers: [AuthController, SocialController],
})
export class AuthModule { }
