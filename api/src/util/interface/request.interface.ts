import { Request } from 'express';
import { SessionDTO } from 'src/auth';

export interface IRequest extends Request {
  user?: SessionDTO;
}
