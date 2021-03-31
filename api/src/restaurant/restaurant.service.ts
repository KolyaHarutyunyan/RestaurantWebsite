import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateRestaurantDTO, RestaurantResponseDTO } from './dto';
import { IRestaurant } from './interfaces';
import { RestaurantModel } from './restaurant.schema';

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
      owner: createRestaurantDTO.restaurantOwner._id,
      name: createRestaurantDTO.name,
      description: createRestaurantDTO.description,
      logoUrl: createRestaurantDTO.logoUrl,
    }).save();
    return this.sanitizeRestaurant(restaurant);
  };

  /** Private Members */
  private sanitizeRestaurant(restaurant: IRestaurant) {
    const sanitizedRestaurant: RestaurantResponseDTO = {
      name: restaurant.name,
      description: restaurant.description,
      logoUrl: restaurant.logoUrl,
      id: restaurant._id,
    };
    return sanitizedRestaurant;
  }
}
