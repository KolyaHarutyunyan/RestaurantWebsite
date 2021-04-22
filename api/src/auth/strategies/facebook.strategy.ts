import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
const VerifyCallback = require('passport-facebook').VerifyCallback;

import { Strategy } from 'passport-facebook';
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
        console.log('stex');
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
        done: typeof VerifyCallback,
    ): Promise<any> {
        console.log('mtav');
        const { provider, displayName, emails, photos, id } = profile;

        const socailLoginDTO: SocialLoginDTO = {
            email: emails[0].value,
            providerKey: provider + 'Id',
            id: id,
            fullName: displayName,
            avatarURL: photos[0].value,
        };


        done(null, socailLoginDTO);
    }
}
