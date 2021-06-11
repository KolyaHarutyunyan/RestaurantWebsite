import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { BusinessModel } from './business.model';
import { Model } from 'mongoose';
import { IBusiness, IWorkDay, IWorkHour, IWorkWeek } from './interface';
import { ImageService } from '../image';
import { BusinessDTO, CreateBusinessDTO } from './dto';
import { BusinessStatus, WorkDayStatus } from './business.constants';
import { BusinessSanitizer } from './interceptor/sanitizer.interceptor';
import { DOMAIN_NAME } from '../constants';
import { AddressService } from '../address';
import { EditBusinessDTO } from './dto/editBusiness.dto';

@Injectable()
export class BusinessService {
  constructor(
    private readonly imageService: ImageService,
    private readonly sanitizer: BusinessSanitizer,
    private readonly addressService: AddressService,
  ) {
    this.model = BusinessModel;
  }
  private model: Model<IBusiness>;

  /****************************** Public Methods *****************************/

  /** Create a new business */
  create = async (businessDTO: CreateBusinessDTO): Promise<BusinessDTO> => {
    let business = new this.model({
      name: businessDTO.name,
      owner: businessDTO.userId,
      status: BusinessStatus.ACTIVE,
      // hours: this.createWorkWeek(),
    });
    business.hours = this.createWorkWeek();
    if (businessDTO.description) {
      business.description = businessDTO.description;
    }
    /** Set the logo if it exists*/
    if (businessDTO.logo) {
      business.logo = businessDTO.logo;
    }
    const accessLink = `${DOMAIN_NAME}/menu?accessid=${business.id}`;
    const qrUrl = await this.imageService.generateQRCode(accessLink);
    business.qrUrl = qrUrl;
    business = await (await business.save()).populate('logo').execPopulate();
    return this.sanitizer.sanitize(business);
  };

  /** Edit business info */
  edit = async (
    businessId: string,
    businessDTO: EditBusinessDTO,
  ): Promise<BusinessDTO> => {
    let business = await this.model.findOne({
      _id: businessId,
      owner: businessDTO.userId,
    });
    /** check if this business was found */
    this.checkBusiness(business);
    if (businessDTO.name) {
      business.name = businessDTO.name;
    }
    if (businessDTO.description) {
      business.description = businessDTO.description;
    }
    if (businessDTO.website) {
      business.website = businessDTO.website;
    }
    if (businessDTO.address) {
      business.address = await this.addressService.getAddress(
        businessDTO.address,
      );
    }
    if (businessDTO.phoneNumber) {
      business.phoneNumber = businessDTO.phoneNumber;
    }
    /** Decide what to do with the logo */
    if (businessDTO.logo === 'DELETE') {
      business.logo = undefined;
    } else if (businessDTO.logo) {
      business.logo = businessDTO.logo;
    }

    if (businessDTO.hours) {
      business.hours = businessDTO.hours as IWorkWeek;
    }
    business = await (await business.save()).populate('logo').execPopulate();
    return this.sanitizer.sanitize(business);
  };

  /** Get all businesses with the ownerId */
  getByOwnerID = async (ownerId: string): Promise<BusinessDTO[]> => {
    const businesses = await this.model
      .find({ owner: ownerId })
      .populate('logo');
    this.checkBusiness(businesses[0]);
    return this.sanitizer.sanitizeMany(businesses);
  };

  /** */

  /****************************** Private Methods *****************************/

  /** @throws not found exception if the business was not found */
  private checkBusiness(business: IBusiness) {
    if (!business) {
      throw new HttpException(
        'business with this information was not found',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  /** creates workweek to the business */
  private createWorkWeek(): IWorkWeek {
    const workweek: IWorkWeek = {
      mon: this.createWorkDay(),
      tue: this.createWorkDay(),
      wed: this.createWorkDay(),
      thr: this.createWorkDay(),
      fri: this.createWorkDay(),
      sat: this.createWorkDay(),
      sun: this.createWorkDay(),
    };
    return workweek;
  }

  /** creates workDay */
  private createWorkDay(): IWorkDay {
    const hour: IWorkHour = {
      open: new Date().toUTCString(),
      close: new Date().toUTCString(),
    };
    return {
      status: WorkDayStatus.CLOSED,
      hours: [hour],
    };
  }
}
