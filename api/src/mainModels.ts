import { Request } from 'express';


export interface IRequest extends Request {
  user?: any;
  token?: string;
}