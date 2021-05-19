import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import {
  AuthDTO,
  ChangePassDTO,
  ResetPassDTO,
  // ChangePassDTO,
  // ResetPassDTO,
  SigninDTO,
  SignupDTO,
  SocialLoginDTO,
} from './dto';
import { JWT_SECRET_FORGET_PASS } from './constants';

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
import { UserModel } from '../user/user.schema';

import { IAuth } from './interfaces';
import { IUser } from 'src/user/interfaces';
import { UpdateUsertDTO } from 'src/user/dto/updateUser.dto';
// import { SendEmailCommandInput } from '@aws-sdk/client-ses';
// import { EditProfileDTO } from 'src/user/dto';

@Injectable()
export class AuthService {
  constructor() {
    this.model = AuthModel;
    this.userModel = UserModel;

    this.sessionExpiratrion = '7d';
  }
  //The Model
  model: Model<IAuth>;
  userModel: Model<IUser>
  sessionExpiratrion: string;

  socialLogin = async (socialLoginDTO: SocialLoginDTO): Promise<AuthDTO> => {
    let auth: IAuth = await this.model.findOne({
      email: socialLoginDTO.email,
    });
    if (!auth) {
      // Scenario 1: Brand New User
      auth = new this.model({
        email: socialLoginDTO.email,
        [socialLoginDTO.providerKey]: socialLoginDTO.id,
        invitation: false,
        role: Role.MEMBER,
      });
    } else {
      //existing record with this email
      if (auth.invitation) {
        //invited user that is not registered
        auth.invitation = false;
      }
      if (!auth[socialLoginDTO.providerKey]) {
        //Scenario 2: User is registered with a different method
        auth[socialLoginDTO.providerKey] = socialLoginDTO.id;
      }
    }
    auth = await auth.save();
    socialLoginDTO.authId = auth._id;
    socialLoginDTO.role = this.convertRole(auth.role);
    return this.getSigninResponse(auth);
  };

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
  private checkAuth = (auth) => {
    if (!auth) {
      throw new HttpException(
        'Such user does not exist in our records',
        HttpStatus.NOT_FOUND,
      );
    }
  };

  private checkPassword = (isCorrect) => {
    if (!isCorrect) {
      throw new HttpException(
        'user password does not match',
        HttpStatus.FORBIDDEN,
      );
    }
  };
  /** if the user has signed up with the social logins, the password will be missing */
  private checkNoPassword = (password?: string) => {
    if (!password) {
      throw new HttpException(
        `Our records indicate that you have not created this account with a password. 
      This means you have used one of the social login methods. 
      Please use the reset password feature to add a password to your account.`,
        HttpStatus.FORBIDDEN,
      );
    }
  };
  /** Confirms whether the newPassword and the confirmation are matching */
  private confirmPassword = (newPass, confirmation) => {
    if (newPass !== confirmation) {
      throw new HttpException(
        'The new password does not match with the confirmation',
        HttpStatus.CONFLICT,
      );
    }
  };
  signin = async (signinDTO: SigninDTO): Promise<any> => {
    try {
      const auth: IAuth = await this.model.findOne({ email: signinDTO.email });

      this.checkAuth(auth);
      const isPasswordCorrect = await auth.comparePassword(signinDTO.password);
      this.checkPassword(isPasswordCorrect);

      return await this.getSigninResponse(auth);
    } catch (err) {
      if (err.code === MONGO_DUPLICATE_KEY) {
        throw new HttpException('User Exists', HttpStatus.FOUND);
      }
      throw err;
    }
  };
  userInformation = async (token): Promise<any> => {
    try {
      if (!token) {
        throw new HttpException('Token not found', HttpStatus.NOT_FOUND);
      }
      const decoded: IToken = await jwt.verify(token, JWT_SECRET_SIGNIN);

      const user: IUser = await this.userModel.findOne({ email: decoded.email });
      if (!user) {
        // throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        return null;
      }
      return user

    } catch (err) {
      if (err.code === MONGO_DUPLICATE_KEY) {
        throw new HttpException('User Exists', HttpStatus.FOUND);
      }
      throw err;
    }
  };

  /**  Changing the user password **/
  changePassword = async (changePassDTO: ChangePassDTO): Promise<AuthDTO> => {
    let auth = await this.model.findOne({
      _id: changePassDTO.user.authId,
    });
    this.checkNoPassword(auth.password);
    const isPasswordCorrect = await auth.comparePassword(
      changePassDTO.password,
    );
    this.checkPassword(isPasswordCorrect);
    this.confirmPassword(changePassDTO.newPassword, changePassDTO.confirmation);
    auth.password = changePassDTO.newPassword;
    auth = await auth.save();
    return await this.getSigninResponse(auth);
  };

  /** Forgot password. sends a link with a token to the users email to reset password*/
  forgotPassword = async (email: string) => {
    const auth = await this.model.findOne({ email });
    this.checkAuth(auth);
    const minutesToExpire = Math.floor(Date.now() / 1000) + 60 * 30; // 30 minutes to expire
    const expString = minutesToExpire.toString();
    const token = await this.generateToken(
      auth,
      JWT_SECRET_FORGET_PASS,
      expString,
    );
    return {
      token: token,
      email: auth.email,
    };
  };

  /** Resets users password */
  resetPassword = async (resetPassDTO: ResetPassDTO): Promise<AuthDTO> => {
    let auth = await this.model.findOne({ email: resetPassDTO.email });
    this.checkAuth(auth);
    auth.password = resetPassDTO.newPassword;
    auth = await auth.save();
    return this.getSigninResponse(auth);
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
