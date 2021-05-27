// import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// import { IUser } from './interfaces/';
// import { UserModel } from './user.schema';
// import { MONGO_DUPLICATE_KEY } from '../auth/constants';
// import { CreateUserDTO, UserDTO } from './dto';
// import { Model } from 'mongoose';
// import { UpdateUsertDTO } from './dto/updateUser.dto';
// import { AuthModel } from 'src/auth/auth.model';
// import { IAuth } from 'src/auth/interfaces';
// import { UserSanitizer } from './interceptor/sanitizer.interceptor';
// import { MongooseUtil } from 'src/util';

// @Injectable()
// export class UserService {
//   constructor(private readonly sanitizer: UserSanitizer) {
//     this.model = UserModel;
//     // this.authModel = AuthModel;
//     this.mongooseUtil = new MongooseUtil();
//   }
//   private model: Model<IUser>;
//   // private authModel: Model<IAuth>;
//   private mongooseUtil: MongooseUtil;

//   /** Service API */
//   async create(createUserDTO: CreateUserDTO): Promise<UserDTO> {
//     try {
//       const newUser = await new this.model({
//         id: createUserDTO.id,
//         email: createUserDTO.email,
//         fullName: createUserDTO.fullName,
//       }).save();
//       return this.sanitizer.sanitize(newUser);
//     } catch (err) {
//       this.mongooseUtil.checkDuplicateKey(err, 'User already exists');
//       throw err;
//     }
//   }

//   /** Gets the user profile */
//   async getProfile(id: string): Promise<UserDTO> {
//     const user = await this.model.findById(id);
//     return this.sanitizer.sanitize(user);
//   }

//   async findByEmail(email: string): Promise<any> {
//     const user = await this.model.findOne({ email: email });
//     if (!user) {
//       // throw new HttpException('User not found', HttpStatus.NOT_FOUND);
//       return null;
//     }
//     return user;
//   }

//   async findById(_id: string): Promise<any> {
//     const user = await this.model.findById({ _id });
//     if (!user) {
//       // throw new HttpException('User not found', HttpStatus.NOT_FOUND);
//       return null;
//     }
//     return user;
//   }

//   async update(owner: string, updateUsertDto: UpdateUsertDTO): Promise<any> {
//     const user = await this.model.findOneAndUpdate(
//       { _id: owner },
//       { fullName: updateUsertDto.fullName, email: updateUsertDto.email },
//       { new: true },
//     );
//     if (!user) {
//       throw new HttpException('Owner not found', HttpStatus.NOT_FOUND);
//       // return null;
//     }
//     const auth = await this.authModel.findOneAndUpdate(
//       { _id: user.authId },
//       { email: user.email },
//       { new: true },
//     );

//     return user;
//   }
//   async deleteUser(_id: string): Promise<any> {
//     const user = await this.model.findOneAndDelete({ _id });
//     if (!user) {
//       throw new HttpException('Owner not found', HttpStatus.NOT_FOUND);
//       // return null;
//     }
//     const auth = await this.authModel.findOneAndDelete({ _id });

//     return user;
//   }

//   //Find the user and return it using the authId. This is for internal use only.
//   async findByAuthId(authId: string): Promise<IUser> {
//     return this.model.findOne({ authId: authId });
//   }
// }
