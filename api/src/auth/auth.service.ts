import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {
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
  }
  //The Model
  model: Model<IAuth>;

  /**Service API */
  signup = async (signupDTO: SignupDTO): Promise<string> => {
    try {
      const newAuth: IAuth = await new this.model({
        email: signupDTO.email,
        password: signupDTO.password,
        role: Role.RESTAURANT_OWNER,
      }).save();
      //Set auth Id
      signupDTO.authId = newAuth.id;
      return await this.generateToken(newAuth, JWT_SECRET_SIGNIN);
    } catch (err) {
      if (err.code === MONGO_DUPLICATE_KEY) {
        throw new HttpException('User Exists', HttpStatus.FOUND);
      }
      throw err;
    }
  };

  // signin = async (signinDTO: SigninDTO): Promise<string> => {
  //   try {
  //     const auth: IAuth = await this.model.findOne({ email: signinDTO.email });
  //     this.checkAuth(auth);
  //     const isPasswordCorrect = await auth.comparePassword(signinDTO.password);
  //     this.checkPassword(isPasswordCorrect);
  //     return await this.generateToken(auth, JWT_SECRET_SIGNIN);
  //   } catch (err) {
  //     throw err;
  //   }
  // };

  // /**
  //  * @purpose - to determine whether the user trying to login to the system exists already or is a new user.
  //  *            The registration process can have the following 3 scenarios:
  //  *            1. Scenario 1: Brand new user - register user, generate token
  //  *            2. Scenario 2: User is registered with a different method - add this method to the user, create and return a token
  //  *            3. Scenario 3: User is registered with the current method- generate and return the token
  //  * @param socialProfile - Social profile object with which this function is called
  //  * @returns {Object} - {accessToken: string, Flag}
  //  */
  // socialLogin = async (socialProfile: SocialLoginDTO) => {
  //   try {
  //     let auth: IAuth = await this.model.findOne({
  //       email: socialProfile.email,
  //     });
  //     if (!auth) {
  //       // Scenario 1: Brand New User
  //       const newAuth = {
  //         email: socialProfile.email,
  //         [socialProfile.providerKey]: socialProfile.id,
  //         role: socialProfile.role,
  //       };
  //       auth = await new this.model(newAuth).save();
  //     } else {
  //       if (!auth[socialProfile.providerKey]) {
  //         // Scenario 2: User is registered with a different method
  //         auth = await this.model.findOneAndUpdate(
  //           { email: socialProfile.email },
  //           { $set: { [socialProfile.providerKey]: socialProfile.id } },
  //           { new: true },
  //         );
  //       }
  //     }
  //     return {
  //       authId: auth._id,
  //       token: this.generateToken(auth, JWT_SECRET_SIGNIN),
  //     };
  //   } catch (error) {
  //     throw error;
  //   }
  // };

  // /** Changing the user email */
  // changeEmail = async (editProfileDTO: EditProfileDTO) => {
  //   try {
  //     const auth = await this.model.findOneAndUpdate(
  //       { _id: editProfileDTO.user.authId },
  //       { $set: { email: editProfileDTO.email } },
  //       { new: true },
  //     );
  //     this.checkAuth(auth);
  //     return this.generateToken(auth, JWT_SECRET_SIGNIN);
  //   } catch (err) {
  //     throw err;
  //   }
  // };

  // /**  Changing the user password **/
  // changePassword = async (changePassDTO: ChangePassDTO): Promise<string> => {
  //   try {
  //     let auth = await this.model.findOne({
  //       _id: changePassDTO.user.authId,
  //     });
  //     this.checkNoPassword(auth.password);
  //     const isPasswordCorrect = await auth.comparePassword(
  //       changePassDTO.password,
  //     );
  //     this.checkPassword(isPasswordCorrect);
  //     this.confirmPassword(
  //       changePassDTO.newPassword,
  //       changePassDTO.confirmation,
  //     );
  //     auth.password = changePassDTO.newPassword;
  //     auth = await auth.save();
  //     return await this.generateToken(auth, JWT_SECRET_SIGNIN);
  //   } catch (err) {
  //     throw err;
  //   }
  // };

  // /** GetEmail password. sends a link with a token to the users email to reset password*/
  // forgotPassword = async (email: string) => {
  //   try {
  //     const auth = await this.model.findOne({ email });
  //     this.checkAuth(auth);
  //     const minutesToExpire = Math.floor(Date.now() / 1000) + 60 * 30; // 30 minutes to expire
  //     const expString = minutesToExpire.toString();
  //     const token = await this.generateToken(
  //       auth,
  //       JWT_SECRET_FORGET_PASS,
  //       expString,
  //     );
  //     return this.generateForgetPassEmailTemplate(token, auth.email);
  //   } catch (err) {
  //     throw err;
  //   }
  // };

  // /** Resets users password */
  // resetPassword = async (resetPassDTO: ResetPassDTO): Promise<string> => {
  //   try {
  //     let auth = await this.model.findOne({ email: resetPassDTO.email });
  //     this.checkAuth(auth);
  //     auth.password = resetPassDTO.newPassword;
  //     auth = await auth.save();
  //     return this.generateToken(auth, JWT_SECRET_SIGNIN);
  //   } catch (err) {
  //     throw err;
  //   }
  // };

  // /** Removes auth from the database */
  // remove = async (authId: string) => {
  //   try {
  //     await this.model.deleteOne({ _id: authId });
  //     return;
  //   } catch (err) {
  //     throw err;
  //   }
  // };

  // //Private Members
  // /** Generates a token using an IAuth object */
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
  // /** Generates an email template for forgetPassword */
  // private generateForgetPassEmailTemplate = (
  //   token: string,
  //   email: string,
  // ): SendEmailCommandInput => {
  //   const url = `${DOMAIN_NAME}/resetPassword?token=${token}`;
  //   const displayUrl = `${DOMAIN_NAME}/resetPassword`;
  //   const mailOptions: SendEmailCommandInput = {
  //     Destination: { ToAddresses: [email] },
  //     Source: COMPANY_EMAIL,
  //     Message: {
  //       Subject: {
  //         Charset: 'UTF-8',
  //         Data: 'Test Email',
  //       },
  //       Body: {
  //         Html: {
  //           Charset: 'UTF-8',
  //           Data: `<html>
  //               <h1>Password Reset Form submitted for armat.org</h1>
  //               <br>
  //               <h3>Dear Customer</h3> <br>
  //               <p>
  //                   There has been a request to reset the password for the account 
  //                   associated with this email. If you have not authorized this update,
  //                   please reach out to us via email at ${COMPANY_EMAIL}. 
  //               </p>
  //               <p>
  //                   If you have requested a password reset, please click the link below to be redirected
  //                   to our website in order to create a new password. 
  //               </p>
  //               <br>
  //               <a href=${url}>${displayUrl}</a>
  //               <br>
  //               <p>
  //                   Thank you for being the best part of Armat and have a great day!
  //               </p>
  //           </html> `,
  //         },
  //       },
  //     },
  //     ReplyToAddresses: ['eachbase@gmail.com'],
  //   };
  //   return mailOptions;
  // };
  // /** if the user has signed up with the social logins, the password will be missing */
  // private checkNoPassword = (password?: string) => {
  //   if (!password) {
  //     throw new HttpException(
  //       `Our records indicate that you have not created this account with a password. 
  //       This means you have used one of the social login methods. 
  //       Please use the reset password feature to add a password to your account.`,
  //       HttpStatus.FORBIDDEN,
  //     );
  //   }
  // };

  // //Check if the auth does not exist and throws http excepton
  // private checkAuth = (auth) => {
  //   if (!auth) {
  //     throw new HttpException(
  //       'Such user does not exist in our records',
  //       HttpStatus.NOT_FOUND,
  //     );
  //   }
  // };

  // //check the password and throw http exception if incorrect
  // private checkPassword = (isCorrect) => {
  //   if (!isCorrect) {
  //     throw new HttpException(
  //       'user password does not match',
  //       HttpStatus.FORBIDDEN,
  //     );
  //   }
  // };

  // /** Confirms whether the newPassword and the confirmation are matching */
  // private confirmPassword = (newPass, confirmation) => {
  //   if (newPass !== confirmation) {
  //     throw new HttpException(
  //       'The new password does not match with the confirmation',
  //       HttpStatus.CONFLICT,
  //     );
  //   }
  // };
}
