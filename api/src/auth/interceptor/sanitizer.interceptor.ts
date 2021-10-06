import { Injectable } from '@nestjs/common';
import { ISanitize } from 'src/util';
import { AuthDTO } from '../dto';
import { IAuth } from '../interfaces';

@Injectable()
export class AuthSanitizer implements ISanitize {
  sanitize(auth: IAuth): AuthDTO {
    const sanitized: AuthDTO = {
      accessToken: auth.session,
      role: auth.role,
    };
    return sanitized;
  }
}
