import { model, Schema } from 'mongoose';
import { IRestaurant } from './interfaces/';

const RestaurantSchema = new Schema({
  owner: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String },
  logoUrl: { type: String },
});

export const RestaurantModel = model<IRestaurant>(
  'restaurant',
  RestaurantSchema,
);
