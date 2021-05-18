import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IUser } from './interfaces/';
import { UserModel } from './user.schema';
import { MONGO_DUPLICATE_KEY } from '../auth/constants';
import { CreateUserDTO, UserResponseDTO } from './dto';
import { Model } from 'mongoose';
import { UpdateUsertDTO } from './dto/updateUser.dto';
import { AuthModel } from 'src/auth/auth.schema';
import { IAuth } from 'src/auth/interfaces';

@Injectable()
export class UserService {
  constructor() {
    this.model = UserModel;
    this.authModel = AuthModel;

  }
  model: Model<IUser>;
  authModel: Model<IAuth>;

  async findByEmail(email: string): Promise<any> {
    const user = await this.model.findOne({ email: email });
    if (!user) {
      // throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      return null;
    }
    return user
  }

  async findById(_id: string): Promise<any> {
    const user = await this.model.findById({ _id });
    if (!user) {
      // throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      return null;
    }
    return user
  }

  async update(owner: string, updateUsertDto: UpdateUsertDTO): Promise<any> {
    const user = await this.model.findOneAndUpdate({ _id: owner }, { fullName: updateUsertDto.fullName, email: updateUsertDto.email }, { new: true });
    if (!user) {
      throw new HttpException('Owner not found', HttpStatus.NOT_FOUND);
      // return null;
    }
    const auth = await this.authModel.findOneAndUpdate({ _id: user.authId }, { email: user.email }, { new: true });
    
    return user
    // update credentials


    return user
  }


  /** Service API */
  async create(createUserDTO: CreateUserDTO): Promise<UserResponseDTO> {
    try {
      const newUser = await new this.model({
        email: createUserDTO.email,
        fullName: createUserDTO.fullName,
        authId: createUserDTO.authId,
        role: createUserDTO.role,
      }).save();
      return this.sanitizeUser(newUser);
    } catch (err) {
      if (err.code === MONGO_DUPLICATE_KEY) {
        throw new HttpException('User Exits', HttpStatus.FOUND);
      }
    }
  }

  //Find the user and return it using the authId. This is for internal use only.
  async findByAuthId(authId: string): Promise<IUser> {
    return this.model.findOne({ authId: authId });
  }

  /** Private Members */
  sanitizeUser(userData: IUser): UserResponseDTO {
    const user: UserResponseDTO = {
      fullName: userData.fullName,
      email: userData.email,
      id: userData.id,
      role: userData.role,
    };
    return user;
  }
}
