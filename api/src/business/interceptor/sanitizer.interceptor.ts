import { ISanitize } from 'src/util';
import { BusinessDTO } from '../dto';
import { IBusiness } from '../interface';

export class BusinessSanitizer implements ISanitize {
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
    if (business.logoUrl) {
      santizedBusiness.logoUrl = business.logoUrl;
    }
    if (business.website) {
      santizedBusiness.website = business.website;
    }
    // if (business.hours) {
    //   santizedBusiness.hours = business.hours;
    // }
    if (business.description) {
      santizedBusiness.description = business.description;
    }
    return santizedBusiness;
  }
}
