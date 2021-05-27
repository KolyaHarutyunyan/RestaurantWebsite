import { UserDTO } from '../dto';
import { IUser } from '../interfaces';

export class UserSanitizer {
  sanitize(user: IUser): UserDTO {
    const sanitizedUser: UserDTO = {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
    };
    return sanitizedUser;
  }
}
