import { Request } from 'express';

export interface IRequest extends Request {
  userId?: any;
  token?: string;
}
