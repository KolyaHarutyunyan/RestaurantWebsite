// import { model, Schema, Types } from 'mongoose';
// import { IRestaurant } from './interfaces/';
// const hourSchema = new Schema({
//   day: { type: Date },
//   open: { type: String },
//   close: { type: String }
// })
// const RestaurantSchema = new Schema({
//   owner: { type: Types.ObjectId, ref: 'user' },
//   name: { type: String, required: true },
//   description: { type: String },
//   logoUrl: { type: String },
//   status: { type: Boolean },
//   menus: [{ type: Types.ObjectId, ref: 'menu', required: true }],
//   website: { type: String },
//   phoneNumber: { type: String },
//   hours: [hourSchema]

// });

// export const RestaurantModel = model<IRestaurant>(
//   'restaurant',
//   RestaurantSchema,
// );
