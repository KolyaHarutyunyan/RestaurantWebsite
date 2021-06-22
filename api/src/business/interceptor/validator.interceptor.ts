import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { BusinessService } from '../business.service';
import { BusinessDTO } from '../dto';

@Injectable()
export class BusinessValidator {
  constructor(private readonly businessService: BusinessService) {}
  /** Validates if the Owner owns the business. @throws if the owner does not own the business */
  async validateBusiness(ownerId: string, businessId: string) {
    const businesses = await this.businessService.getByOwnerID(ownerId);
    this.checkBusinessId(businessId, businesses);
  }

  /** Get the businessIds from the list of businessses. @throws if the not businsesses were found */
  private checkBusinessId(
    businessId: string,
    businesses: BusinessDTO[],
  ): boolean {
    if (!businessId) {
      throw new HttpException(
        'businessId was not received',
        HttpStatus.BAD_REQUEST,
      );
    }
    if (!businesses || businesses.length < 1) {
      throw new HttpException(
        'We could not find businesses for your account',
        HttpStatus.NOT_FOUND,
      );
    }
    for (let i = 0; i < businesses.length; i++) {
      if (businessId == businesses[i].id) {
        return true;
      }
    }
    throw new HttpException(
      'This user does not have a business with the specified Id',
      HttpStatus.NOT_FOUND,
    );
  }
}
