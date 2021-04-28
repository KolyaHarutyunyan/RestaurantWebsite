import { model, Schema,Types } from 'mongoose';
import { IMenuItem } from './interfaces/';
const imageSchema = new Schema({
    url: {type: String, required: true},
    thumbURL: {type: String, required: true}
})
const MenuItemSchema = new Schema({
  restaurantId: { type: Types.ObjectId, ref: 'restaurant' },
  name: { type: String, required: true },
  description: { type: String },
  option: { type: String },
  price: {type: Number},
  images: [imageSchema]
});

export const MenuItemModel = model<IMenuItem>(
  'menuItem',
  MenuItemSchema,
);


