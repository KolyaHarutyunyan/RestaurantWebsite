import { OwnerDTO } from '../dto';
import { IOwner } from '../interfaces';

export class OwnerSanitizer {
  sanitize(user: IOwner): OwnerDTO {
    const sanitizedUser: OwnerDTO = {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
    };
    return sanitizedUser;
  }
}
