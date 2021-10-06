import { ISanitize } from '../../util';
import { OwnerDTO } from '../dto';
import { IOwner } from '../interfaces';

export class OwnerSanitizer implements ISanitize {
  sanitize(user: IOwner): OwnerDTO {
    const sanitizedUser: OwnerDTO = {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      avatar: user.avatar,
    };
    return sanitizedUser;
  }

  sanitizeMany(owners: IOwner[]): OwnerDTO[] {
    const sanitizedOwners: OwnerDTO[] = [];
    for (let i = 0; i < owners.length; i++) {
      sanitizedOwners.push(this.sanitize(owners[i]));
    }
    return sanitizedOwners;
  }
}
