import { model, Schema, Types } from 'mongoose';
import { IImage } from './interface';

const imageSchema = new Schema({
  uploader: { type: Types.ObjectId, required: true },
  originalUrl: { type: String, required: true },
  thumbUrl: String,
});

export const ImageModel = model<IImage>('image', imageSchema);
