import {
    CanActivate,
    ExecutionContext,
    HttpException,
    HttpStatus,
    Injectable,
  } from '@nestjs/common';
  import * as jwt from 'jsonwebtoken';
  import { JWT_SECRET_FORGET_PASS } from '../constants';
  import { IToken } from '../interfaces';
  
  @Injectable()
  export class ResetPassGuard implements CanActivate {
    async canActivate(context: ExecutionContext): Promise<boolean> {
      const request = context.switchToHttp().getRequest();
      try {
        const token = request.get('reset-token');
        this.checkToken(token);
        const decoded: IToken = await jwt.verify(token, JWT_SECRET_FORGET_PASS);
        request.body.email = decoded.email;
        return true;
      } catch (err) {
        if (err.name === 'TokenExpiredError') {
          throw new HttpException(
            'Token is expired, request another reset',
            HttpStatus.FORBIDDEN,
          );
        }
        //unknown error
        throw err;
      }
    }
  
    //private members
    private checkToken(token: string) {
      if (!token) {
        throw new HttpException(
          'reset-token header was not set',
          HttpStatus.UNAUTHORIZED,
        );
      }
    }
  }
  