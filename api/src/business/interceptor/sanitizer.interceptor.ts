import { Injectable } from '@nestjs/common';
import { AddressSanitizer } from 'src/address';
import { IImage, ImageSanitizer } from 'src/image';
import { ISanitize } from 'src/util';
import { BusinessDTO } from '../dto';
import { IBusiness } from '../interface';

@Injectable()
export class BusinessSanitizer implements ISanitize {
  constructor(
    private readonly addressSanitizer: AddressSanitizer,
    private readonly imgSanitizer: ImageSanitizer,
  ) {}

  sanitize(business: IBusiness): BusinessDTO {
    const santizedBusiness: BusinessDTO = {
      id: business.id,
      name: business.name,
      status: business.status,
      qrUrl: business.qrUrl,
    };
    if (business.description) {
      santizedBusiness.description = business.description;
    }
    if (business.logo) {
      santizedBusiness.logo = this.imgSanitizer.sanitize(
        business.logo as IImage,
      );
    }
    if (business.website) {
      santizedBusiness.website = business.website;
    }
    if (business.phoneNumber) {
      santizedBusiness.phoneNumber = business.phoneNumber;
    }
    if (business.hours) {
      santizedBusiness.hours = business.hours;
    }
    if (business.address) {
      santizedBusiness.address = this.addressSanitizer.sanitize(
        business.address,
      );
    }
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
