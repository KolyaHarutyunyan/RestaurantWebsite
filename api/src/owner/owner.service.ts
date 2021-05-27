import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Role, SocialLoginDTO } from '../auth';
import { MongooseUtil } from '../util';
import { CreateOwnerDTO, OwnerDTO } from './dto';
import { OwnerSanitizer } from './interceptor';
import { IOwner } from './interfaces';
import { OwnerModel } from './owner.model';

@Injectable()
export class OwnerService {
  constructor(private readonly sanitizer: OwnerSanitizer) {
    this.model = OwnerModel;
    // this.authModel = AuthModel;
    this.mongooseUtil = new MongooseUtil();
  }
  private model: Model<IOwner>;
  // private authModel: Model<IAuth>;
  private mongooseUtil: MongooseUtil;

  /** Service API */
  /** Used for creating a new user in the system with email and password. @throws if the email is a duplica*/
  async create(dto: CreateOwnerDTO): Promise<OwnerDTO> {
    try {
      const owner = await new this.model({
        email: dto.email,
        fullName: dto.fullName,
      }).save();
      dto.id = owner.id;
      dto.role = Role.OWNER;
      return this.sanitizer.sanitize(owner);
    } catch (err) {
      this.mongooseUtil.checkDuplicateKey(err, 'User already exists');
      throw err;
    }
  }

  /** Used for social authentication, either finds the user and returns it, or creates a new one if the email was not found */
  async createWithSocial(dto: SocialLoginDTO): Promise<OwnerDTO> {
    let owner = await this.model.findOne({ email: dto.email });
    if (!owner) {
      owner = await new this.model({
        fullname: dto.fullName,
        email: dto.email,
      }).save();
    }
    dto.id = owner._id;
    dto.role = Role.OWNER;
    return this.sanitizer.sanitize(owner);
  }
}
