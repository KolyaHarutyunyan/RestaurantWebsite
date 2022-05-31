import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Role } from 'src/auth';
import { AuthService } from 'src/auth/auth.service';
import { MongooseUtil } from 'src/util';
import { CREATE_CODE } from './admin.constants';
import { AdminModel } from './admin.model';
import { AdminSanitizer } from './admin.sanitizer';
import { AdminDTO, CreateAdminDTO } from './dto';
import { IAdmin } from './interface';

@Injectable()
export class AdminService {
  constructor(
    private readonly sanitizer: AdminSanitizer,
    private readonly authService: AuthService,
  ) {
    this.mongooseUtil = new MongooseUtil();
    this.model = AdminModel;
  }
  private mongooseUtil: MongooseUtil;
  private model: Model<IAdmin>;

  /** Create an admin account */
  async create(dto: CreateAdminDTO): Promise<AdminDTO> {
    try {
      if (dto.code !== CREATE_CODE) {
        throw new HttpException('The secret code did not match', HttpStatus.UNAUTHORIZED);
      }
      const admin = new this.model({
        email: dto.email,
      });
      admin.auth = admin._id;
      await this.authService.create(admin._id, dto.email, dto.password, Role.ADMIN);
      await admin.save();
      return this.sanitizer.sanitize(admin);
    } catch (err) {
      this.mongooseUtil.checkDuplicateKey(err, 'User already exists');
      throw err;
    }
  }
}
