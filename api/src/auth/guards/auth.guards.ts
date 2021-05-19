import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Request } from 'express';
import * as jwt from 'jsonwebtoken';
import { ACCESS_TOKEN } from '../../constants';
import { IUser } from '../../user/interfaces';
import { UserService } from '../../user/user.service';
import { AuthService } from '../auth.service';
import { JWT_SECRET_SIGNIN, Role } from '../constants';
import { IToken } from '../interfaces';

/** Authorization and Authentication guard. Checks if the user has enough privilages to access a resource and whether the user is Authenticated */
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(roles?: Role[]) {
    this.allowedRoles = roles;
    this.authService = new AuthService();
    this.userService = new UserService();
  }
  private allowedRoles: Role[];
  private userService: UserService;
  private authService: AuthService;

  async canActivate(context: ExecutionContext): Promise<boolean> {
    var dateNow = new Date();

    const request: Request = context.switchToHttp().getRequest();
    const token: string = request.get(ACCESS_TOKEN);
    // Check token
    await this.isValidToken(token);
    // Verify token
    const decoded: IToken = await jwt.verify(token, JWT_SECRET_SIGNIN);
 
    //check roles
    this.checkRoles(decoded.role);
    request.body.user = await this.checkUser(decoded.id);
    
    return true;
}

  /** Check Roles */
  private checkRoles(role: Role): boolean {
    if (!this.allowedRoles) {
      //access granted to all
      return true;
    }
    if (role && this.allowedRoles.find((x) => x === role)) {
      // role was allowed
      return true;
    }
    throw new HttpException(
      'You do not have permissions to access this resource',
      HttpStatus.UNAUTHORIZED,
    );
  }

  /** Checks for the tokens validity */
  private async isValidToken(token: string) {
    if (!token) {
      throw new HttpException(
        'An access token must be set to access this resource',
        HttpStatus.UNAUTHORIZED,
      );
    }
    // const blackListedToken = await this.authService.findTokenInBlacklist(token);
    // if (blackListedToken) {
    //   throw new HttpException(
    //     'Session expired, please sign in again',
    //     HttpStatus.UNAUTHORIZED,
    //   );
    // }
  }

  /** Check for user identity */
  private async checkUser(authId: string): Promise<IUser> {
    const user = await this.userService.findByAuthId(authId);
    if (!user) {
      throw new HttpException(
        "Failed to establish user's identity",
        HttpStatus.UNAUTHORIZED,
      );
    }
    return user;
  }
}
