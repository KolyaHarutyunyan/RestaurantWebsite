import { model, Schema,Types } from 'mongoose';
import { IRestaurant } from './interfaces/';

const RestaurantSchema = new Schema({
  owner: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String },
  logoUrl: { type: String },
  status: {type: Boolean},
  menus: [{ type: Types.ObjectId, ref: 'menu', required: true }],
  website: {type: String},
  phoneNumber: {type: String}

});

export const RestaurantModel = model<IRestaurant>(
  'restaurant',
  RestaurantSchema,
);
