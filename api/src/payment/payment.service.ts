import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { IItem } from 'src/item';
import { ItemModel } from 'src/item/item.model';

@Injectable()
export class PaymentService {
  constructor() {
    this.model = ItemModel;
  }
  private model: Model<IItem>;

  /** Public API */
  /** Create a new payment */
  async create(dto: any): Promise<any> {
    const item = await this.model.findOne();
    item.images.push(dto);
    return 'ok';
  }
}
