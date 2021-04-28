import { model, Schema, Types } from 'mongoose';
import { IMenu } from './interfaces/';

const MenuSchema = new Schema({
    //   restaurantId: { type: String, required: true },
    restaurantId: { type: Types.ObjectId, ref: 'restaurant' },
    name: { type: String, required: true },
    tagline: { type: String },
    menuImg: { type: String },
    description: { type: String },
    foodCategories: [{ type: Types.ObjectId, ref: 'category' }],
    drinkCategories: [{ type: Types.ObjectId, ref: 'category' }],
    isActive: { type: Boolean, required: true },
});

export const MenuModel = model<IMenu>(
    'menu',
    MenuSchema,
);
