import { Document } from 'mongoose';
import { AccountStatus, Role } from '../constants';
/** Data type is used to descibe the data model of the Auth collection */
export interface IAuth extends Document {
  email: string;
  password?: string;
  googleId?: string;
  twitterId?: string;
  facebookId?: string;
  appleId: string;
  invitation?: boolean;
  sessions: string[];
  role: Role;
  status: AccountStatus;
  /**Mathods */
  comparePassword?: any;
}
