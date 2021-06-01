import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { BusinessService } from '../business.service';
import { IRequest } from '../../util';
import { BusinessDTO } from '../dto';

@Injectable()
export class BusinessGuard implements CanActivate {
  constructor(private readonly businessService: BusinessService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: IRequest = context.switchToHttp().getRequest();
    const businessId: string = request.body?.businessId;
    const userId = request.userId;
    this.checkUserId(userId);
    const businesses = await this.businessService.getByOwnerID(userId);
    this.checkBusinessId(businessId, businesses);
    return;
  }

  /** Private Methods */
  /** @throws if the userId is not available on the request */
  private checkUserId(userId: string) {
    if (!userId) {
      throw new HttpException(
        'Used Id was not available',
        HttpStatus.BAD_REQUEST,
      );
    }
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
        'not businesses under this account was found',
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
