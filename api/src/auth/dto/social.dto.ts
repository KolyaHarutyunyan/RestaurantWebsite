import { SocialLoginDTO } from '.';
import { AuthDTO } from './auth.dto';

/** The shape of the object that is returned from social servie */
export class SocialDTO {
  authDTO?: AuthDTO;
  createUserDTO?: SocialLoginDTO;
}
