import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { GOOGLE_CALLBACK_URL, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '../constants';
import { SocialLoginDTO } from '../dto';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: GOOGLE_CALLBACK_URL,
      scope: ['email', 'profile'],
    });
  }
  async validate(accessToken: string, refreshToken: string, profile: any, done: any): Promise<any> {
    const { provider, displayName, emails, photos, id } = profile;
    const socialLoginDTO: SocialLoginDTO = {
      email: emails[0].value,
      providerKey: provider + 'Id',
      providerId: id,
      fullName: displayName,
      avatarURL: photos[0].value,
    };
    done(null, socialLoginDTO);
  }
}
