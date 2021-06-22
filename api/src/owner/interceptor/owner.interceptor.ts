import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { IRequest } from '../../util';

@Injectable()
export class OwnerInterceptor implements NestInterceptor {
  // constructor() {}
  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const request: IRequest = context.switchToHttp().getRequest();
    const userId: string = request.userId;
    request.body.userId = userId;
    return next.handle();
  }
}
