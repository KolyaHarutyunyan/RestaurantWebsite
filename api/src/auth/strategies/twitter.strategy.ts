import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-twitter';
import { TWITTER_CALLBACK_URL, TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET } from '../constants';
import { SocialDTO } from '../dto';

@Injectable()
export class TwitterStrategy extends PassportStrategy(Strategy, 'twitter') {
  constructor() {
    super({
      consumerKey: TWITTER_CONSUMER_KEY,
      consumerSecret: TWITTER_CONSUMER_SECRET,
      callbackURL: TWITTER_CALLBACK_URL,
      userProfileURL:
        'https://api.twitter.com/1.1/account/verify_credentials.json?include_email=true',
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any, done: any): Promise<any> {
    const { provider, displayName, emails, photos, id } = profile;
    const socialLoginDTO: SocialDTO = {
      email: emails[0].value,
      providerKey: provider + 'Id',
      socialId: id,
      fullName: displayName,
      avatar: photos[0].value,
    };
    done(null, socialLoginDTO);
  }
}
