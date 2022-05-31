import { Injectable } from '@nestjs/common';
import { AddressSanitizer } from 'src/components/address/address.sanitizer';
import { IOwner } from 'src/owner/interfaces';
import { ISanitize } from 'src/util';
import { BusinessDTO } from './dto';
import { IBusiness } from './interface';

@Injectable()
export class BusinessSanitizer implements ISanitize {
  constructor(private readonly addressSanitizer: AddressSanitizer) {}

  sanitize(business: IBusiness): BusinessDTO {
    const owner = this.getOwner(business.owner);
    const santizedBusiness: BusinessDTO = {
      id: business.id,
      name: business.name,
      status: business.status,
      qr: business.qr,
      description: business.description,
      logo: business.logo,
      website: business.website,
      phoneNumber: business.phoneNumber,
      hours: business.hours,
      address: this.addressSanitizer.sanitize(business.address),
      ownerId: owner?.id,
      ownerName: owner?.fullName,
    };
    return santizedBusiness;
  }

  sanitizeMany(businesses: IBusiness[]): BusinessDTO[] {
    const sanitizedbusinesses: BusinessDTO[] = [];
    for (let i = 0; i < businesses.length; i++) {
      sanitizedbusinesses.push(this.sanitize(businesses[i]));
    }
    return sanitizedbusinesses;
  }

  getOwner(owner: any): IOwner {
    const user = owner as IOwner;
    if (user?.fullName) {
      return user;
    }
    return undefined;
  }
}
