import { Document } from 'mongoose';

export interface IImage extends Document {
  uploader: string;
  originalUrl: string;
  thumbUrl: string;
}
