import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { SocialController } from './social.controller';

import {
  FacebookStrategy
} from './strategies';
@Module({
  imports: [UserModule],
  providers: [AuthService, FacebookStrategy],
  controllers: [AuthController, SocialController],
})
export class AuthModule { }
