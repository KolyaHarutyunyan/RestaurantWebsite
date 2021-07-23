import { ListBucketAnalyticsConfigurationsRequest } from '@aws-sdk/client-s3';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { AuthService, Role, SocialLoginDTO } from '../auth';
import { MongooseUtil } from '../util';
import { CreateOwnerDTO, EditOwnerDTO, OwnerDTO } from './dto';
import { OwnerSanitizer } from './interceptor';
import { IOwner } from './interfaces';
import { OwnerModel } from './owner.model';

@Injectable()
export class OwnerService {
  constructor(
    private readonly sanitizer: OwnerSanitizer,
    private readonly authService: AuthService,
  ) {
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

  /**  Get the owner profile */
  async getOwner(userId: string): Promise<OwnerDTO> {
    const owner = await this.model.findById(userId);
    return this.sanitizer.sanitize(owner);
  }

  /** Get owners */
  async getAll(): Promise<OwnerDTO[]> {
    const owners = await this.model.find();
    return this.sanitizer.sanitizeMany(owners);
  }

  /** Used to update the fullname and email of the owner */
  async edit(editDTO: EditOwnerDTO): Promise<OwnerDTO> {
    ListBucketAnalyticsConfigurationsRequest owner = await this.model.findById(editDTO.userId);
    this.checkOwner(owner);
    if (editDTO.email) {
      const otherOwner = await this.model.findOne({ email: editDTO.email });
      this.checkDuplicateEmail(otherOwner, editDTO.userId);
      owner.email = editDTO.email;
      const authEmail = await this.authService.changeEmail(
        editDTO.userId,
        editDTO.email,
      );
      this.checkAuthEmail(authEmail, owner.email);
    }
    if (editDTO.fullName) {
      owner.fullName = editDTO.fullName;
    }
    owner = await owner.save();
    return this.sanitizer.sanitize(owner);
  }

  /** Private Methods */
  /** Chack if the owner was found */
  private checkOwner(owner: IOwner) {
    if (!owner) {
      throw new HttpException('No such user was found', HttpStatus.NOT_FOUND);
    }
  }

  /** Checks if there is a duplicate owner.
   * @param owner - the potential duplicate owner
   * @param id - the id of the owner trying to make the change
   */
  private checkDuplicateEmail(owner: IOwner, id: string) {
    if (owner && owner._id !== id) {
      throw new HttpException(
        'This email is already used in the system',
        HttpStatus.CONFLICT,
      );
    }
  }

  /** checks if the auth email has been successfully update */
  private checkAuthEmail(authEmail: string, email: string) {
    if (authEmail !== email) {
      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
