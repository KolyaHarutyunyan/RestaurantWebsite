import { Document } from 'mongoose';
/** Data type is used to descibe the data model of the Auth collection */
export interface IAuth extends Document {
  email: string;
  password?: string;
  googleId?: string;
  twitterId?: string;
  facebookId?: string;
  invitation?:boolean;
  role: number;
  /**Mathods */
  comparePassword?: any;
}
