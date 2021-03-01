import { Role } from '../constants';

/** Data type is used to interact with passport to get and create the req.user object*/
export class SocialLoginDTO {
  email: string;
  id: string;
  providerKey: string;
  role: Role;
}
