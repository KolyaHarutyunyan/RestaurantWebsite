import { Body, Controller, Post } from '@nestjs/common';
import { ApiHeader, ApiTags } from '@nestjs/swagger';
import { Public } from '../util';
import { ACCESS_TOKEN } from 'src/util/constants';
import { PaymentService } from './payment.service';
import Stripe from 'stripe';
const stripe = new Stripe(
  'sk_test_51LmCY4HoKYb9ljrZILnOepvZ0NszY0Y9utWnCqULpk4wksodTRBAdwgroq8HOymLYAxODWNWGncfAhZU4x0yeR8100tdbGRDIO',
  {
    apiVersion: '2022-08-01',
  },
);

// const createCustomer = async () => {
//   const params: Stripe.CustomerCreateParams = {
//     description: 'test customer',
//   };

//   const customer: Stripe.Customer = await stripe.customers.create(params);

//   console.log(customer.id);
// };
// createCustomer();
@Controller('payments')
@ApiTags('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  /** Create an item */
  @Post()
  @ApiHeader({ name: ACCESS_TOKEN })
  @Public()
  async createItem(@Body() dto: any): Promise<any> {
    const payment = await this.paymentService.create(dto);
    return payment;
  }
}
