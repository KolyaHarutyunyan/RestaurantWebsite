import * as constants from '../constants';
import { AppleSignin } from '../../apple-signin/appleSignin';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AppleAuthorizedResponse } from '../../apple-signin';

/** This class serves as an interface between the general AppleSignin module and our system */
@Injectable()
export class AppleStrategy {
  constructor() {
    this.appleSignin = new AppleSignin({
      clientId: constants.APPLE_CLIENT_ID,
      teamId: constants.APPLE_TEAM_ID,
      keyId: constants.APPLE_KEY_ID,
      redirectUri: constants.APPLE_CALLBACK_URL,
      privateKeyPath: '../AuthKey_X435C3KUNZ.p8',
    });
  }
  /** Members */
  private appleSignin: AppleSignin;

  /** Get the authorization url - redirect the user to this url to have them sign in  */
  getAuthorizationURL = () => {
    return this.appleSignin.getAuthorizationUrl();
  };

  /** Get the code sent by apple and return the  */
  authorize = async (authResponse: AppleAuthorizedResponse) => {
    try {
      const signedinResponse = await this.appleSignin.authorize(authResponse);
      return signedinResponse;
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  };
}
