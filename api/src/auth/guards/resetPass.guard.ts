// import {
//   CanActivate,
//   ExecutionContext,
//   HttpException,
//   HttpStatus,
//   Injectable,
// } from '@nestjs/common';
// import * as jwt from 'jsonwebtoken';
// import { UserService } from 'src/user/user.service';
// import { ACCESS_TOKEN } from '../../constants';
// import { AuthService } from '../auth.service';
// import { JWT_SECRET_SIGNIN, Role } from '../constants';
// import { IToken } from '../interfaces';

// @Injectable()
// export class ResetPassGuard implements CanActivate {
//   constructor(roles?: Role[]) {
//     this.allowedRoles = roles;
//     this.authService = new AuthService();
//     this.userService = new UserService();
//   }
//   private allowedRoles: Role[];
//   private userService: UserService;
//   private authService: AuthService;
  
//   async canActivate(context: ExecutionContext): Promise<boolean> {
//     const request: Request = context.switchToHttp().getRequest();
//     const token: string = request.get(ACCESS_TOKEN);
//     // Check token
//     await this.isValidToken(token);
//     try {
//       // Verify token
//       const decoded: IToken = await jwt.verify(token, JWT_SECRET_SIGNIN);
//       //check roles
//       this.checkRoles(decoded.role);
//       request.body.user = await this.checkUser(decoded.id);
//       request.user = request.body.user;
//       return true;
//     } catch (err) {
//       console.log(err);
//       throw new HttpException(
//         'Your session is expired, please login again',
//         HttpStatus.UNAUTHORIZED,
//       );
//     }
//   }

//   /** Private Methods */
//   private checkToken(token: string) {
//     if (!token) {
//       throw new HttpException(
//         'reset-token header was not set',
//         HttpStatus.UNAUTHORIZED,
//       );
//     }
//   }

//   /** Checks for the tokens validity */
//   private async isValidToken(token: string) {
//     if (!token) {
//       throw new HttpException(
//         'An access token must be set to access this resource',
//         HttpStatus.UNAUTHORIZED,
//       );
//     }
//     const blackListedToken = await this.authService.findTokenInBlacklist(token);
//     if (blackListedToken) {
//       throw new HttpException(
//         'Session expired, please sign in again',
//         HttpStatus.UNAUTHORIZED,
//       );
//     }
//   }
// }
// // End of Guard
