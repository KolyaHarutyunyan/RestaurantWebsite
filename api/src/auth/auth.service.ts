import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import * as jwt from 'jsonwebtoken';
import { ChangePassDTO, ResetPassDTO, SignedInDTO, SigninDTO, SocialDTO, SessionDTO } from './dto';
import {
  AccountStatus,
  JWT_SECRET_FORGET_PASS,
  JWT_SECRET_SIGNIN,
  SESSION_EXPIRATION,
  Role,
} from './constants';
import { AuthModel } from './auth.model';
import { IAuth, IToken } from './interface';
import { MongooseUtil } from '../util';
import { MailerService } from 'src/components/mailer';
import { AuthSanitizer } from './auth.sanitizer';
import { NotificationType } from 'src/util/constants';

@Injectable()
export class AuthService {
  constructor(
    private readonly sanitizer: AuthSanitizer,
    private readonly mailerService: MailerService,
  ) {
    this.mongooseUtil = new MongooseUtil();
    this.model = AuthModel;
  }
  //The Model
  private model: Model<IAuth>;
  mongooseUtil: MongooseUtil;

  /************************** Service API *************************/
  /** Signup a new user with the username and password */
  async create(id: string, email: string, password: string, role: Role): Promise<SignedInDTO> {
    try {
      let auth: IAuth = new this.model({
        _id: id,
        email: email,
        password: password,
        role: role,
        sessions: [],
        status: AccountStatus.ACTIVE,
      });
      const loggedInDTO = await this.login(auth);
      auth.sessions.push(loggedInDTO.token);
      auth = await auth.save();
      return loggedInDTO;
    } catch (err) {
      this.mongooseUtil.checkDuplicateKey(err, 'User with this email exists');
      throw err;
    }
  }

  /** Singn in a new user with username and password */
  async signin(dto: SigninDTO): Promise<SignedInDTO> {
    const auth: IAuth = await this.model.findOne({ email: dto.email });
    this.checkAuth(auth);
    this.checkStatus(auth.status);
    const isPasswordCorrect = await auth.comparePassword(dto.password);
    this.checkPassword(isPasswordCorrect);
    const loggedInDTO = await this.login(auth);
    auth.sessions.push(loggedInDTO.token);
    await auth.save();
    return loggedInDTO;
  }

  /**
   * @purpose - to determine whether the user trying to login to the system exists already or is a new user.
   *            The registration process can have the following 3 scenarios:
   *            1. Scenario 1: Brand new user - register user, generate token
   *            2. Scenario 2: User is registered with a different method - add this method to the user, create and return a token
   *            3. Scenario 3: User is registered with the current method- generate and return the token
   * @param dto - Social profile object with which this function is called
   * @returns {Object} - {accessToken: string, Flag}
   */
  async socialLogin(dto: SocialDTO): Promise<SignedInDTO> {
    // eslint-disable-next-line prefer-const
    let [existing, auth] = await Promise.all([
      this.model.findOne({ [dto.providerKey]: dto.socialId }),
      this.model.findOne({ email: dto.email }),
    ]);
    // Exiting account with this social method
    if (existing) return await this.login(auth);
    // Social method did not exists, search further for the account
    if (auth) {
      //Scenario 2: User is registered with a different method
      if (!auth[dto.providerKey]) auth[dto.providerKey] = dto.socialId;
    } else {
      // Check if the provider state is valid
      this.checkProviderError(dto.email);
      auth = new this.model({
        _id: dto.id,
        email: dto.email,
        [dto.providerKey]: dto.socialId,
        role: dto.role,
        status: AccountStatus.ACTIVE,
        sessions: [],
      });
    }
    const loggedInDTO = await this.login(auth);
    auth.sessions.push(loggedInDTO.token);
    await auth.save();
    return loggedInDTO;
  }

  /** Removes the user token from the auth, clearing the user session */
  async logout(id: string, token: string): Promise<string> {
    const auth = await this.model.findOneAndUpdate({ _id: id }, { $pull: { sessions: token } });
    this.checkAuth(auth);
    return auth.sessions.find((e) => e === token);
  }

  /** Changing the user password **/
  async changePassword(dto: ChangePassDTO): Promise<SignedInDTO> {
    const auth = await this.model.findOne({
      _id: dto.user.id,
    });
    this.confirmPassword(dto.newPassword, dto.confirmation);
    if (auth.password) {
      const isPasswordCorrect = await auth.comparePassword(dto.password);
      this.checkPassword(isPasswordCorrect);
      this.confirmPassword(dto.newPassword, dto.confirmation);
    }
    auth.password = dto.newPassword;
    const loggedInDTO = await this.login(auth);
    auth.sessions.push(loggedInDTO.token);
    await auth.save();
    return loggedInDTO;
  }

  /** Forgot password. sends a link with a token to the users email to reset password*/
  async forgotPassword(email: string) {
    const auth = await this.model.findOne({ email });
    this.checkAuth(auth);
    this.checkStatus(auth.status);
    const minutesToExpire = Math.floor(Date.now() / 1000) + 60 * 30; // 30 minutes to expire
    const expString = minutesToExpire.toString();
    const token = await this.generateToken(auth, JWT_SECRET_FORGET_PASS, expString);
    await this.mailerService.sendMail({
      email,
      resetToken: token,
      type: NotificationType.FORGOT_PASSWORD,
    });
  }

  /** Resets users password */
  async resetPassword(resetPassDTO: ResetPassDTO): Promise<SignedInDTO> {
    const auth = await this.model.findOne({ email: resetPassDTO.email });
    this.checkAuth(auth);
    auth.password = resetPassDTO.newPassword;
    const loggedInDTO = await this.login(auth);
    auth.sessions.push(loggedInDTO.token);
    await auth.save();
    return loggedInDTO;
  }

  /** find the user with the id */
  async getRaw(id: string): Promise<IAuth> {
    const auth = await this.model.findById(id);
    this.checkAuth(auth);
    return auth;
  }

  /** delete auth object */
  async delete(id: string): Promise<string> {
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
  }

  /** changes the email  */
  async changeEmail(id: string, email: string): Promise<string> {
    const auth = await this.model.findOneAndUpdate(
      { _id: id },
      { $set: { email: email } },
      { new: true },
    );
    return auth.email;
  }

  /** Verify session */
  async getSession(authId: string, token: string): Promise<IAuth> {
    const auth = await this.model.findById(authId);
    this.checkAuth(auth);
    // this.checkActive(auth);
    if (!auth.sessions.includes(token)) {
      throw new HttpException('session is invalid, sign in again', HttpStatus.UNAUTHORIZED);
    }
    return auth;
  }

  /** Checks for the tokens validity */
  async decodeToken(token: string) {
    if (!token) {
      throw new HttpException(
        'An access token must be set to access this resource',
        HttpStatus.UNAUTHORIZED,
      );
    }
    try {
      // Verify token
      const decoded: IToken = await jwt.verify(token, JWT_SECRET_SIGNIN);
      return decoded;
    } catch (err) {
      throw new HttpException(
        'Your session is expired, please login again',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }

  /** if the user is not an admin, @returns false. Else returns true*/
  isAdmin(user: SessionDTO): boolean {
    if (user.role !== Role.ADMIN) {
      return false;
    }
    return true;
  }

  /** if the user is not an admin, @throws an error */
  enforceAdmin(user: SessionDTO) {
    if (!this.isAdmin(user)) {
      throw new HttpException(
        'Only system administrators are allowed to perform this function',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }

  /*********************** Private Methods ***********************/
  /** generates the response for signed in users */
  private async login(auth: IAuth): Promise<SignedInDTO> {
    const token = await this.generateToken(auth, JWT_SECRET_SIGNIN, SESSION_EXPIRATION);
    const signedIn: SignedInDTO = {
      token,
      role: auth.role,
    };
    return signedIn;
  }

  /** Generates a token using an IAuth object */
  private async generateToken(auth: IAuth, secret: string, expiration?: string): Promise<string> {
    const tokenEntity: IToken = {
      email: auth.email,
      id: auth._id,
      role: auth.role,
    };
    if (expiration) {
      return await jwt.sign(tokenEntity, secret, { expiresIn: expiration });
    } else {
      return await jwt.sign(tokenEntity, secret);
    }
  }

  /** @throws error if the auth is undefined */
  private checkAuth(auth) {
    if (!auth) {
      throw new HttpException('Such user does not exist in our records', HttpStatus.NOT_FOUND);
    }
  }

  /** @throws error is the password is incorrect */
  private checkPassword(isCorrect) {
    if (!isCorrect) {
      throw new HttpException('user password does not match', HttpStatus.FORBIDDEN);
    }
  }

  /** @throws error is the new password is not matching the confirmation */
  private confirmPassword(newPass, confirmation) {
    if (newPass !== confirmation) {
      throw new HttpException(
        'The new password does not match with the confirmation',
        HttpStatus.CONFLICT,
      );
    }
  }

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

  /** Tells the user that the social login provider has an inconsistent state with Armat */
  private checkProviderError(email: string) {
    if (!email) {
      throw new HttpException(
        `Our records show that this social signin was used for an account that does not exist anymore.
        Please login to you social account, disconnect Armat from this id (e.g. appleId) and try to login again or use another method`,
        HttpStatus.EXPECTATION_FAILED,
      );
    }
  }
}
//End of Service
