import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { BusinessModel } from './business.model';
import { Model } from 'mongoose';
import { IBusiness } from './interface';
import { BusinessDTO, CreateBusinessDTO } from './dto';
import { BusinessStatus } from './business.constants';
import { BusinessSanitizer } from './business.sanitizer';
import { DOMAIN_NAME } from '../util/constants';
import { AddressService } from '../components/address/address.service';
import { EditBusinessDTO } from './dto/edit.dto';
import { FileService } from 'src/components/file/file.service';
import { ScheduleService } from 'src/components/schedule/schedule.service';
import { AuthService } from 'src/auth/auth.service';
import { Role, SessionDTO } from 'src/auth';

@Injectable()
export class BusinessService {
  constructor(
    private readonly fileService: FileService,
    private readonly sanitizer: BusinessSanitizer,
    private readonly addressService: AddressService,
    private readonly scheduleService: ScheduleService,
    private readonly authService: AuthService,
  ) {
    this.model = BusinessModel;
  }
  private model: Model<IBusiness>;

  /****************************** Public Methods *****************************/
  /** Create a new business */
  async create(dto: CreateBusinessDTO): Promise<BusinessDTO> {
    const business = new this.model({
      name: dto.name,
      owner: dto.user.id,
      status: BusinessStatus.ACTIVE,
      description: dto.description,
      phoneNumber: dto.phoneNumber,
      logo: dto.logo,
    });
    if (dto.address) {
      business.address = await this.addressService.getAddress(dto.address);
    }
    const accessLink = `${DOMAIN_NAME}/menu?accessid=${business.id}`;
    business.qr = await this.fileService.generateQRCode(dto.user.id, accessLink);
    await business.save();
    return this.sanitizer.sanitize(business);
  }

  /** Edit business info */
  async edit(businessId: string, dto: EditBusinessDTO): Promise<BusinessDTO> {
    let business = await this.model.findById(businessId);
    this.checkBusiness(business);
    this.enforceOwner(dto.user.id, business.owner);
    if (dto.name) business.name = dto.name;
    if (dto.description) business.description = dto.description;
    if (dto.website) business.website = dto.website;
    if (dto.facebook) business.facebook = dto.facebook;
    if (dto.instagram) business.instagram = dto.instagram;
    if (dto.address) business.address = await this.addressService.getAddress(dto.address);
    if (dto.phoneNumber || dto.phoneNumber === null) business.phoneNumber = dto.phoneNumber;
    if (dto.hours) business.hours = this.scheduleService.create(dto.hours);
    if (dto.logo) {
      if (business.logo) await this.fileService.deleteFile(dto.user.id, business.logo.id);
      business.logo = dto.logo;
    } else if (dto.removeLogo) {
      await this.fileService.deleteFile(dto.user.id, business.logo.id);
      business.logo = undefined;
    }
    business = await business.save();
    return this.sanitizer.sanitize(business);
  }

  /** Get a business by id */
  async get(id: string): Promise<BusinessDTO> {
    const business = await this.model.findById(id);
    this.checkBusiness(business);
    return this.sanitizer.sanitize(business);
  }
  async getAll(page: number, user: SessionDTO): Promise<BusinessDTO[]> {
    if (!user || user.role !== Role.ADMIN) {
      throw new HttpException(
        'The user needs to be an admin to see this info',
        HttpStatus.UNAUTHORIZED,
      );
    }
    if (page < 0) {
      throw new HttpException('Invalid Page', HttpStatus.BAD_REQUEST);
    }
    const PAGE_SIZE = 20;
    const businesses = await this.model
      .find({})
      .skip(PAGE_SIZE * page)
      .limit(PAGE_SIZE)
      .populate('owner');
    return this.sanitizer.sanitizeMany(businesses);
  }

  /** Get all businesses with the ownerId */
  async getByOwnerID(ownerId: string): Promise<BusinessDTO[]> {
    const businesses = await this.model.find({ owner: ownerId });
    this.checkBusiness(businesses[0]);
    return this.sanitizer.sanitizeMany(businesses);
  }

  /** set the business status. @returns the new status if updated. Throws if the business was not found */
  async setStatus(id: string, status: BusinessStatus, user: SessionDTO): Promise<BusinessStatus> {
    this.authService.enforceAdmin(user);
    const business = await this.model.findOneAndUpdate(
      { _id: id, owner: user.id },
      { $set: { status: status } },
    );
    this.checkBusiness(business);
    return business.status;
  }

  /** Closes all businesses for user */
  async closeBusinesses(accountId, user: SessionDTO) {
    this.authService.enforceAdmin(user);
    await this.model.updateMany(
      { ownerId: accountId },
      { $set: { status: BusinessStatus.CLOSED } },
    );
  }

  /** Validates if the Owner owns the business. @throws if the owner does not own the business */
  async validateOwner(ownerId: string, businessId: string) {
    const business = await this.model.findById({ _id: businessId });
    this.enforceOwner(ownerId, business.owner.toString());
  }

  /***************************** Private Methods ****************************/
  /** @throws not found exception if the business was not found */
  private checkBusiness(business: IBusiness) {
    if (!business) {
      throw new HttpException('business with this information was not found', HttpStatus.NOT_FOUND);
    }
  }

  /** check if the logged in user is a business owner */
  private checkOwner(userId: string, businessOwnerId: string): boolean {
    if (userId == businessOwnerId) {
      return true;
    }
    return false;
  }

  /** Force the owner of the business */
  private enforceOwner(userId: string, businessOwnerId: string) {
    if (!this.checkOwner(userId, businessOwnerId)) {
      throw new HttpException(
        'You must be the business owner to do this change',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}
