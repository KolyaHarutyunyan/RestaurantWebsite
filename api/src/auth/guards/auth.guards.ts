import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Request } from 'express';
import * as jwt from 'jsonwebtoken';
import { UserService } from 'src/user/user.service';
import { JWT_SECRET_SIGNIN, Role } from '../constants';

/** Authorization and Authentication guard. Checks if the user has enough privilages to access a resource and whether the user is Authenticated */
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(roles?: Role[]) {
    this.allowedRoles = roles;
    this.userService = new UserService();
  }
  allowedRoles: Role[];
  private userService: UserService;

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const token: string = request.get('access-token');
    // Check token
    if (!token) {
      throw new HttpException(
        'An access token must be set to access this resource',
        HttpStatus.UNAUTHORIZED,
      );
    }
    // Verify token
    try {
      const decoded = jwt.verify(token, JWT_SECRET_SIGNIN);
      //check roles
      if (this.allowedRoles && !this.checkRoles(decoded.role)) {
        throw new HttpException(
          'You do not have permissions to access this resource',
          HttpStatus.UNAUTHORIZED,
        );
      }
      //check if user is correct
      const user = await this.userService.findByAuthId(decoded.id);
      if (user) {
        throw new HttpException(
          "Failed to establish user's identity",
          HttpStatus.UNAUTHORIZED,
        );
      }
      request.body.user = user;
      request.body.token = token;
      return true;
    } catch (err) {
      throw err;
    }
  }

  //Checking roles
  checkRoles(role: Role): boolean {
    if (!this.allowedRoles) {
      //access granted to all
      return true;
    }
    if (role && this.allowedRoles.find((x) => x === role)) {
      //check if the role is allowed
      return true;
    }
    return false;
  }
}
