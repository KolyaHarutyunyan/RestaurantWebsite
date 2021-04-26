import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {
  AuthDTO,
  // ChangePassDTO,
  // ResetPassDTO,
  // SigninDTO,
  SignupDTO,
  // SocialLoginDTO,
} from './dto';
import { IToken } from './interfaces';
import * as jwt from 'jsonwebtoken';
import {
  // COMPANY_EMAIL,
  // DOMAIN_NAME,
  // JWT_SECRET_FORGET_PASS,
  JWT_SECRET_SIGNIN,
  MONGO_DUPLICATE_KEY,
  Role,
} from './constants';
import { Model } from 'mongoose';
import { AuthModel } from './auth.schema';
import { IAuth } from './interfaces';
// import { SendEmailCommandInput } from '@aws-sdk/client-ses';
// import { EditProfileDTO } from 'src/user/dto';

@Injectable()
export class AuthService {
  constructor() {
    this.model = AuthModel;
    this.sessionExpiratrion = '7d';
  }
  //The Model
  model: Model<IAuth>;
  sessionExpiratrion: string;

  /**Service API */
  signup = async (signupDTO: SignupDTO): Promise<AuthDTO> => {
    try {
      const auth: IAuth = await new this.model({
        email: signupDTO.email,
        password: signupDTO.password,
        role: Role.RESTAURANT_OWNER,
      }).save();
      //Set auth Id
      signupDTO.authId = auth.id;
      //Set the role
      signupDTO.role = this.convertRole(auth.role);
      return await this.getSigninResponse(auth);
    } catch (err) {
      if (err.code === MONGO_DUPLICATE_KEY) {
        throw new HttpException('User Exists', HttpStatus.FOUND);
      }
      throw err;
    }
  };

  /** Private Methods */
  /** Generates the signed in response */
  private async getSigninResponse(auth: IAuth): Promise<AuthDTO> {
    const token = await this.generateToken(
      auth,
      JWT_SECRET_SIGNIN,
      this.sessionExpiratrion,
    );
    console.log(auth.role);

    const role = this.convertRole(auth.role);

    return { token, role };
  }

  /** Generates a token using an IAuth object */
  private async generateToken(
    auth: IAuth,
    secret: string,
    expiration?: string,
  ): Promise<string> {
    const tokenEntity: IToken = {
      email: auth.email,
      id: auth.id,
      role: +auth.role,
    };
    if (expiration) {
      return await jwt.sign(tokenEntity, secret, { expiresIn: expiration });
    } else {
      return await jwt.sign(tokenEntity, secret);
    }
  }

  /** Converts the system role to a client usable form */
  private convertRole(role: Role): string {
    console.log(role, ' Switch');

    switch (role) {
      case Role.ADMIN:
        return 'ADMIN';
      case Role.RESTAURANT_OWNER:
        return 'RESTAURANT_OWNER';
    }
  }
}
//End of Service
