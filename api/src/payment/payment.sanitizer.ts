// import { ISanitize } from '../util';
// import { PaymentDTO } from './dto';
// import { IOwner } from './interfaces';

// export class PaymentSanitizer implements ISanitize {
//   sanitize(user: IOwner): OwnerDTO {
//     const sanitizedUser: OwnerDTO = {
//       id: user.id,
//       fullName: user.fullName,
//       packages: user.packages,
//       email: user.email,
//       avatar: user.avatar,
//       socialAvatar: user.socialAvatar,
//     };
//     return sanitizedUser;
//   }

//   sanitizeMany(owners: IOwner[]): OwnerDTO[] {
//     const sanitizedOwners: OwnerDTO[] = [];
//     for (let i = 0; i < owners.length; i++) {
//       sanitizedOwners.push(this.sanitize(owners[i]));
//     }
//     return sanitizedOwners;
//   }
// }
