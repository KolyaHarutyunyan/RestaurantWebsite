import { Injectable } from '@nestjs/common';
import { BusinessModel } from './business.model';
import { Model } from 'mongoose';
import { IBusiness } from './interface';
import { ImageService } from '../image';
import { CreateBusinessDTO } from './dto';
import { BusinessStatus } from './business.constants';
import { BusinessSanitizer } from './interceptor/sanitizer.interceptor';
import { DOMAIN_NAME } from 'src/constants';

@Injectable()
export class BusinessService {
  constructor(
    private readonly imageService: ImageService,
    private readonly sanitizer: BusinessSanitizer,
  ) {
    this.model = BusinessModel;
  }
  private model: Model<IBusiness>;

  /****************************** Public Methods *****************************/

  /** Create a new business */
  create = async (ownerId: string, businessDTO: CreateBusinessDTO) => {
    let business = new this.model({
      name: businessDTO.name,
      ownerId: ownerId,
      status: BusinessStatus.ACTIVE,
    });
    if (businessDTO.description) {
      business.description = businessDTO.description;
    }
    /** Set the logo if it exists*/
    if (businessDTO.logo) {
      business.logoUrl = await this.imageService.saveFile(businessDTO.logo);
    }
    const accessLink = `${DOMAIN_NAME}/menu?accessid=${business.id}`;
    const qrUrl = await this.imageService.generateQRCode(accessLink);
    business.qrUrl = qrUrl;
    business = await business.save();
    return this.sanitizer.sanitize(business);
  };

  /** Edit business info */
  //   edit = async (businessDTO) => {};
  /****************************** Private Methods *****************************/

  /** Check business */
}
