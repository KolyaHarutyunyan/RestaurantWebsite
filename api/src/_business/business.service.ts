import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { IBusiness } from './interfaces';
import { BusinessModel } from './business.schema';
import * as QRCode from 'qrcode';
import * as path from 'path';

@Injectable()
export class BusinessService {
  constructor() {
    this.model = BusinessModel;
  }
  private model: Model<IBusiness>;

  /** API */
  /** Create business */
  create = async (createbusinessDTO: CreatebusinessDTO, id: string) => {
    if (createbusinessDTO.status === true) {
      const findStatus = await this.model.findOne({ status: true });
      if (findStatus) {
        findStatus.status = false;

        await findStatus.save();
      }
    }

    const business = await new this.model({
      owner: id,
      name: createbusinessDTO.name,
      description: createbusinessDTO.description,
      logoUrl: createbusinessDTO.logoUrl,
      status: createbusinessDTO.status,
    }).save();

    await business.save();

    return this.sanitizebusiness(business);
  };

  /** API */
  /** Create Qr */
  createQr = async (businessId: string) => {
    const generateQr = await QRCode.toFile(
      path.join(__dirname, '../../qrCodes/qrCode.png'),
      `domain/api/business/${businessId}`,
    );
    return generateQr;
  };

  /** API */
  /** get business */
  getAllbusiness = async () => {
    const business = await this.model.find({}).populate('owner');
    return business;
  };

  /** API */
  /** get business by id */
  getbusinessById = async (owner: string) => {
    const getbusiness = await this.model.findOne({ owner }).populate('menus');

    return getbusiness;
  };

  /** API */
  /** update business by id */
  updatebusiness = async (
    owner: string,
    _id: string,
    updatebusinessDto: UpdatebusinessDTO,
  ) => {
    if (updatebusinessDto.status === 'true') {
      const findStatus = await this.model.findOne({ status: true });
      if (findStatus) {
        findStatus.status = false;

        await findStatus.save();
      }
    }
    const updatebusiness = await this.model.findOneAndUpdate(
      { owner, _id },
      {
        name: updatebusinessDto.name,
        description: updatebusinessDto.description,
        website: updatebusinessDto.website,
        phoneNumber: updatebusinessDto.phoneNumber,
        status: updatebusinessDto.status,
        logoUrl: updatebusinessDto.logoUrl,
      },
      { new: true },
    );

    return this.sanitizebusiness(updatebusiness);
  };

  /** API */
  /** delete business by id */
  deletebusiness = async (owner, _id: string) => {
    const deletebusiness = await this.model.findOneAndDelete({ owner, _id });
    return deletebusiness;
  };

  /** Private Members */
  private sanitizebusiness(business: IBusiness) {
    const sanitizedbusiness: businessResponseDTO = {
      name: business.name,
      description: business.description,
      logoUrl: business.logoUrl,
      id: business._id,
    };
    return sanitizedbusiness;
  }
}
