import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateRestaurantDTO, RestaurantResponseDTO, UpdateRestaurantDTO } from './dto';
import { IRestaurant } from './interfaces';
import { RestaurantModel } from './restaurant.schema';
import * as QRCode from 'qrcode';
import * as path from 'path';

@Injectable()
export class RestaurantService {
  constructor() {
    this.model = RestaurantModel;
  }
  private model: Model<IRestaurant>;

  /** API */
  /** Create restaurant */
  create = async (createRestaurantDTO: CreateRestaurantDTO) => {
    const restaurant = await new this.model({
      owner: createRestaurantDTO.ownerId,
      name: createRestaurantDTO.name,
      description: createRestaurantDTO.description,
      logoUrl: createRestaurantDTO.logoUrl,
      website: createRestaurantDTO.website,
      phoneNumber: createRestaurantDTO.phoneNumber,
      status: true
    }).save();

    restaurant.hours.push({ day: createRestaurantDTO.day, open: createRestaurantDTO.open, close: createRestaurantDTO.close });
    await restaurant.save();

    return this.sanitizeRestaurant(restaurant);
  };

  /** API */
  /** Create Qr */
  createQr = async (restaurantId: string) => {

    const generateQr = await QRCode.toFile(path.join(__dirname, '../../qrCodes/qrCode.png'), `domain/api/restaurant/${restaurantId}`);
    return generateQr;
    
  };

  /** API */
  /** get restaurant */
  getAllRestaurant = async () => {

    const restaurant = await this.model.find({}).populate('owner')
    return restaurant

  };

  /** API */
  /** get restaurant by id */
  getRestaurantById = async (_id: string) => {

    const getRestaurant = await this.model.findById({ _id }).populate("menus")
    return getRestaurant

  };

  /** API */
  /** update restaurant by id */
  updateRestaurant = async (_id: string, updateRestaurantDto: UpdateRestaurantDTO) => {

    const updateRestaurant = await this.model.findOneAndUpdate({ _id }, {
      name: updateRestaurantDto.name, description: updateRestaurantDto.description,
      website: updateRestaurantDto.website, phoneNumber: updateRestaurantDto.phoneNumber, status: updateRestaurantDto.status
    }, { new: true });

    return this.sanitizeRestaurant(updateRestaurant);

  };

  /** API */
  /** delete restaurant by id */
  deleteRestaurant = async (_id: string) => {

    const deleteRestaurant = await this.model.findOneAndDelete({ _id });

    return deleteRestaurant;

  };


  /** Private Members */
  private sanitizeRestaurant(restaurant: IRestaurant) {
    const sanitizedRestaurant: RestaurantResponseDTO = {
      name: restaurant.name,
      description: restaurant.description,
      logoUrl: restaurant.logoUrl,
      id: restaurant._id
    };
    return sanitizedRestaurant;
  }

}
