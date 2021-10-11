import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { IRequest } from '../../util';
import { ACCESS_TOKEN } from '../../constants';
import { AuthService } from '../auth.service';
import { AccountStatus, JWT_SECRET_SIGNIN, Role } from '../constants';
import { IAuth, IToken } from '../interfaces';

/** Authorization and Authentication guard. Checks if the user has enough privilages to access a resource and whether the user is Authenticated */
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(roles?: Role[]) {
    this.allowedRoles = roles;
    this.authService = new AuthService();
  }
  private allowedRoles: Role[];
  private authService: AuthService;

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: IRequest = context.switchToHttp().getRequest();
    const token: string = request.get(ACCESS_TOKEN);
    // Verify token
    const decoded: IToken = await this.decodeToken(token);
    //check roles
    this.checkRoles(decoded.role);
    const auth = await this.authService.findById(decoded.id);
    this.checkStatus(auth.status);
    this.checkSession(auth.session, token);
    request.body.userId = auth.id;
    request.body.auth = auth;
    request.userId = auth.id;
    return true;
  }

  /** Check account status */
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
  private async decodeToken(token: string): Promise<IToken> {
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

  /** Checks if the session is correct */
  private checkSession(session: string, token: string) {
    if (session != token) {
      throw new HttpException('The session is invalid', HttpStatus.UNAUTHORIZED);
    }
  }
}
