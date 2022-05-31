import { Injectable } from '@nestjs/common';
import { ISanitize } from 'src/util';
import { AdminDTO } from './dto';
import { IAdmin } from './interface';

@Injectable()
export class AdminSanitizer implements ISanitize {
  sanitize(model: IAdmin): AdminDTO {
    const dto: AdminDTO = {
      email: model.email,
    };
    return dto;
  }

  sanitizeMany(models: IAdmin[]): AdminDTO[] {
    const dtos: AdminDTO[] = [];
    for (let i = 0; i < models.length; i++) {
      dtos.push(this.sanitize(models[i]));
    }
    return dtos;
  }
}
