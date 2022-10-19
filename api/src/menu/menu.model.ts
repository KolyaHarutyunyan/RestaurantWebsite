import { model, Schema, Types } from 'mongoose';
import { FileSchema } from 'src/components/file';
import { IMenu } from './interface';

const MenuItemSchema = new Schema({
  price: Number,
  item: { type: Types.ObjectId, ref: 'item' },
});

const CategorySchema = new Schema({
  name: String,
  description: { type: String },
  active: { type: Boolean, default: true },
  items: [MenuItemSchema],
});

const MenuSchema = new Schema(
  {
    owner: { type: Types.ObjectId, ref: 'owner' },
    businessId: { type: Types.ObjectId, ref: 'business' },
    name: { type: String, required: true },
    tagline: { type: String },
    image: FileSchema,
    description: { type: String },
    food: [CategorySchema],
    drinks: [CategorySchema],
    isActive: { type: Boolean, required: true },
  },
  { timestamps: true },
);

export const MenuModel = model<IMenu>('menu', MenuSchema);
