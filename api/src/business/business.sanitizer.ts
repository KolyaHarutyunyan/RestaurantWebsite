import { Injectable } from '@nestjs/common';
import { AddressSanitizer } from 'src/components/address/address.sanitizer';
// import { IImage, ImageSanitizer } from 'src/image';
import { ISanitize } from 'src/util';
import { BusinessDTO } from './dto';
import { IBusiness } from './interface';

@Injectable()
export class BusinessSanitizer implements ISanitize {
  constructor(private readonly addressSanitizer: AddressSanitizer) {}

  sanitize(business: IBusiness): BusinessDTO {
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
}
