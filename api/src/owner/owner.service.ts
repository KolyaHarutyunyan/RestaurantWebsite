import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { AuthDTO, AuthService, Role, SocialLoginDTO } from '../auth';
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
    this.mongooseUtil = new MongooseUtil();
  }
  private model: Model<IOwner>;
  private mongooseUtil: MongooseUtil;

  /** Service API */
  /** Used for creating a new user in the system with email and password. @throws if the email is a duplica*/
  async create(dto: CreateOwnerDTO): Promise<AuthDTO> {
    try {
      const owner = new this.model({
        email: dto.email,
        fullName: dto.fullName,
        avatar: dto.avatarURL,
      });
      const auth = await Promise.all([
        owner.save(),
        this.authService.create(owner._id, dto.email, dto.password, Role.OWNER),
      ])[1];
      return auth;
    } catch (err) {
      this.mongooseUtil.checkDuplicateKey(err, 'User already exists');
      throw err;
    }
  }

  /** Used for social authentication, either finds the user and returns it, or creates a new one if the email was not found */
  async createWithSocial(dto: SocialLoginDTO): Promise<OwnerDTO> {
    let owner = await this.model.findOne({ email: dto.email });
    if (!owner) {
      owner = new this.model({
        fullname: dto.fullName,
        email: dto.email,
        avatar: dto.avatarURL,
      });
      owner = await owner.save();
    }
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
  async edit(dto: EditOwnerDTO): Promise<OwnerDTO> {
    let owner = await this.model.findById(dto.userId);
    this.checkOwner(owner);
    if (dto.email) {
      const otherOwner = await this.model.findOne({ email: dto.email });
      this.checkDuplicateEmail(otherOwner, dto.userId);
      owner.email = dto.email;
      const authEmail = await this.authService.changeEmail(dto.userId, dto.email);
      this.checkAuthEmail(authEmail, owner.email);
    }
    if (dto.fullName) {
      owner.fullName = dto.fullName;
    }
    if (dto.avatarURL) owner.avatar = dto.avatarURL;
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
      throw new HttpException('This email is already used in the system', HttpStatus.CONFLICT);
    }
  }

  /** checks if the auth email has been successfully update */
  private checkAuthEmail(authEmail: string, email: string) {
    if (authEmail !== email) {
      throw new HttpException('Something went wrong', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
