import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { Strategy, VerifyFunction } from 'passport-facebook';
import { CreateUserDTO } from '../../user/dto/createUser.dto';
import {
  FACEBOOK_CALLBACK_URL,
  FACEBOOK_APP_ID,
  FACEBOOK_APP_SECRET,
  Role,
} from '../constants';
import { SocialLoginDTO } from '../dto';

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
  constructor() {
    super({
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: FACEBOOK_CALLBACK_URL,
      scope: ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: any,
  ): Promise<any> {
    const { provider, displayName, emails, photos, id } = profile;

    const socailLoginDTO: SocialLoginDTO = {
      email: emails[0].value,
      providerKey: provider + 'Id',
      providerId: id,
      fullName: displayName,
      avatarURL: photos[0].value,
    };

    done(null, socailLoginDTO);
  }
}
