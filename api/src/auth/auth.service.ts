import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import * as jwt from 'jsonwebtoken';
import { AuthDTO, ChangePassDTO, ResetPassDTO, SigninDTO, SocialDTO, SocialLoginDTO } from './dto';
import { AccountStatus, JWT_SECRET_FORGET_PASS, JWT_SECRET_SIGNIN } from './constants';
import { AuthModel } from './auth.model';
import { IAuth, IToken } from './interfaces';
import { MongooseUtil } from '../util';
import { MailerService } from 'src/mailer';
import { AppleSignedinResponse } from 'src/apple-signin/types';
import { AuthSanitizer } from './interceptor';
import { Role } from '.';

@Injectable()
export class AuthService {
  constructor() {
    this.sanitizer = new AuthSanitizer();
    this.mongooseUtil = new MongooseUtil();
    this.mailerService = new MailerService();
    this.model = AuthModel;
  }
  //The Model
  private sanitizer: AuthSanitizer;
  private model: Model<IAuth>;
  private mailerService: MailerService;
  mongooseUtil: MongooseUtil;

  /************************** Service API *************************/

  /** Signup a new user with the username and password */
  create = async (id: string, email: string, password: string, role: Role): Promise<AuthDTO> => {
    try {
      let auth: IAuth = new this.model({
        _id: id,
        email: email,
        password: password,
        role: role,
        session: null,
        status: AccountStatus.ACTIVE,
      });
      auth.session = await this.createSession(auth);
      auth = await auth.save();
      return this.sanitizer.sanitize(auth);
    } catch (err) {
      this.mongooseUtil.checkDuplicateKey(err, 'User with this email exists');
      throw err;
    }
  };

  /** Singn in a new user with username and password */
  signin = async (signinDTO: SigninDTO): Promise<any> => {
    const auth: IAuth = await this.model.findOne({ email: signinDTO.email });
    this.checkAuth(auth);
    this.checkStatus(auth.status);
    const isPasswordCorrect = await auth.comparePassword(signinDTO.password);
    this.checkPassword(isPasswordCorrect);
    auth.session = await this.createSession(auth);
    await auth.save();
    return this.sanitizer.sanitize(auth);
  };

  /** Login or Signup a user with social logins */
  socialLogin = async (dto: SocialLoginDTO, role: Role): Promise<SocialDTO> => {
    let auth: IAuth = await this.model.findOne({
      email: dto.email,
    });
    if (!auth) {
      // Scenario 1: Brand New User
      auth = new this.model({
        _id: dto.id,
        email: dto.email,
        [dto.providerKey]: dto.providerId,
        role: role,
        status: AccountStatus.ACTIVE,
      });
    } else {
      if (!auth[dto.providerKey]) {
        //Scenario 2: User is registered with a different method
        auth[dto.providerKey] = dto.id;
        this.checkStatus(auth.status);
      }
    }
    auth.session = await this.createSession(auth);
    auth = await auth.save();
    const response = {
      authDTO: this.sanitizer.sanitize(auth),
      createUserDTO: dto,
    };
    return response;
  };

  /** Apple Login */
  appleLogin = async (appleDTO: AppleSignedinResponse, role: Role): Promise<SocialDTO> => {
    const response: SocialDTO = {};
    /** User already has an account */
    let auth = await this.model.findOne({ appleId: appleDTO.openId });
    if (auth) {
      /** User is already found with that opneId */
      auth.session = await this.createSession(auth);
      response.authDTO = this.sanitizer.sanitize(auth);
      return response;
    } else if (appleDTO.email) {
      /** Reaching this point means the user was not found with the given openId */
      //email exists, check the email
      auth = await this.model.findOne({ email: appleDTO.email });
      if (!auth) {
        /** Create a new account - no record exists for this user */
        auth = new this.model({
          email: appleDTO.email,
          appleId: appleDTO.openId,
          role: role,
        });
        response.createUserDTO = {
          id: auth._id,
          email: auth.email,
          fullName: appleDTO.name
            ? `${appleDTO.name.firstName} ${appleDTO.name.lastName}`
            : 'Menumango User',
        };
      } else {
        /** An auth was found with the email */
        auth.appleId = appleDTO.openId;
      }
      /** Return the authDTO*/
      auth = await auth.save();
      response.authDTO = this.sanitizer.sanitize(auth);
      return response;
    } else {
      // No account and apple did not send us email
      throw new HttpException(
        `Our records show that Apple Signin was used for an account that does not exist anymore. 
        Please login to you Apple account, disconnect Armat from this appleId and try again`,
        HttpStatus.EXPECTATION_FAILED,
      );
    }
  };

  /** Logs out the session by finding the used and deleting its session token
   * @Returns the invalidated session token
   */
  logout = async (userId: string): Promise<string> => {
    const auth = await this.model.findOneAndUpdate({ _id: userId }, { $set: { session: null } });
    return auth.session;
  };

  /** Changing the user password **/
  changePassword = async (userId: string, dto: ChangePassDTO): Promise<AuthDTO> => {
    let auth = await this.model.findOne({ _id: userId });
    this.confirmPassword(dto.newPassword, dto.confirmation);
    auth.password = dto.newPassword;
    auth.session = await this.createSession(auth);
    auth = await auth.save();
    return this.sanitizer.sanitize(auth);
  };

  /** Forgot password. sends a link with a token to the users email to reset password*/
  forgotPassword = async (email: string) => {
    const auth = await this.model.findOne({ email });
    this.checkAuth(auth);
    this.checkStatus(auth.status);
    const minutesToExpire = Math.floor(Date.now() / 1000) + 60 * 30; // 30 minutes to expire
    const expString = minutesToExpire.toString();
    const tokenEntity: IToken = {
      email: auth.email,
      id: auth.id,
      role: auth.role,
    };
    const token = await jwt.sign(tokenEntity, JWT_SECRET_FORGET_PASS, {
      expiresIn: expString,
    });
    // send email to the user with the reset link
    const response = await this.mailerService.sendForgetPasswordMail({
      token,
      email: auth.email,
    });
    return response;
  };

  /** Resets users password */
  resetPassword = async (dto: ResetPassDTO): Promise<AuthDTO> => {
    let auth = await this.model.findOne({ email: dto.email });
    this.checkAuth(auth);
    this.checkStatus(auth.status);
    this.confirmPassword(dto.newPassword, dto.confirmation);
    auth.password = dto.newPassword;
    auth.session = await this.createSession(auth);
    auth = await auth.save();
    return this.sanitizer.sanitize(auth);
  };

  /** find the user with the id */
  findById = async (id: string): Promise<IAuth> => {
    const auth = await this.model.findById(id);
    this.checkAuth(auth);
    return auth;
  };

  /** delete auth object */
  delete = async (id: string): Promise<string> => {
    const updated = await this.model.findOneAndUpdate(
      { _id: id },
      { $set: { status: AccountStatus.CLOSED } },
      { new: true },
    );
    if (updated.status === AccountStatus.CLOSED) {
      return updated.id;
    } else {
      throw new HttpException(
        'Could not close the account, please contact an admin',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  };

  /** changes the email  */
  changeEmail = async (id: string, email: string): Promise<string> => {
    const auth = await this.model.findOneAndUpdate(
      { _id: id },
      { $set: { email: email } },
      { new: true },
    );
    return auth.email;
  };

  /*********************** Private Methods ***********************/

  /** @Creates a session token from an auth object */
  private async createSession(auth: IAuth): Promise<string> {
    // const sessionExpiration = '7d';
    const tokenEntity: IToken = {
      email: auth.email,
      id: auth.id,
      role: auth.role,
    };
    return await jwt.sign(tokenEntity, JWT_SECRET_SIGNIN, {
      // expiresIn: sessionExpiration,
    });
  }

  /** @throws error if the auth is undefined */
  private checkAuth = (auth) => {
    if (!auth) {
      throw new HttpException('Such user does not exist in our records', HttpStatus.NOT_FOUND);
    }
  };

  /** @throws error is the password is incorrect */
  private checkPassword = (isCorrect) => {
    if (!isCorrect) {
      throw new HttpException('user password does not match', HttpStatus.FORBIDDEN);
    }
  };

  /** @throws error is the new password is not matching the confirmation */
  private confirmPassword = (newPass, confirmation) => {
    if (newPass !== confirmation) {
      throw new HttpException(
        'The new password does not match with the confirmation',
        HttpStatus.CONFLICT,
      );
    }
  };

  /** Check account status, @throws error if the account status is anything but active */
  private checkStatus(status: AccountStatus) {
    switch (status) {
      case AccountStatus.ACTIVE:
        return;
      case AccountStatus.CLOSED:
        throw new HttpException(
          'This account has been closed by the owner',
          HttpStatus.UNAUTHORIZED,
        );
      case AccountStatus.SUSPENDED:
        throw new HttpException('Your account has been suspended', HttpStatus.UNAUTHORIZED);
      default:
        throw new HttpException(
          'This account seems to be problematic, contact admin',
          HttpStatus.UNAUTHORIZED,
        );
    }
  }
}
//End of Service
