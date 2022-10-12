import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiBody, ApiHeader, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Public } from '../util';
import { ACCESS_TOKEN } from 'src/util/constants';
import { PaymentService } from './payment.service';
import Stripe from 'stripe';
import { EditWebhookDTO } from './dto/update.dto';
import { WebhookDTO } from './dto/payment.dto';
import { CreatePaymentDTO, CreateWebhookDTO } from './dto/create.dto';
import { WebhookAction } from './payment.constants';
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
  /** Create an subscription */
  @Post('sub')
  @ApiHeader({ name: ACCESS_TOKEN })
  @Public()
  async createSubscription(@Body() dto: CreatePaymentDTO): Promise<any> {
    const payment = await this.paymentService.createSubscription(dto);
    return payment;
  }
  /** Refund the subscription */
  @Post('refundSub')
  @ApiHeader({ name: ACCESS_TOKEN })
  @Public()
  async refundSub(@Query('charge') charge: string): Promise<any> {
    const payment = await this.paymentService.refundSub(charge);
    return payment;
  }

  /** Create an product */
  @Post('product')
  @ApiHeader({ name: ACCESS_TOKEN })
  @Public()
  async createProduct(@Query('name') name: string, @Query('active') active: boolean): Promise<any> {
    const payment = await this.paymentService.createProduct(name, active);
    return payment;
  }
  /** Get the products */
  @Get('product')
  @ApiHeader({ name: ACCESS_TOKEN })
  @Public()
  async getProducts(): Promise<any> {
    const payment = await this.paymentService.getProducts();
    return payment;
  }
  /** Configure a webhook */
  @Post('webhooks')
  @Public()
  @ApiBody({ type: CreateWebhookDTO })
  @ApiOkResponse({ type: WebhookDTO })
  async addWebhook(): Promise<WebhookDTO> {
    const webhook = await this.paymentService.addWebhook();
    return webhook;
  }
  /** Get configured webhook list */
  //   @Get('webhooks')
  //   @Public()
  //   async getwebhooks(): Promise<any> {
  //     const webhooks = await this.paymentService.getWebhooks();
  //     return webhooks;
  //   }

  /** Get recently (up to 1 hour) sent events via webhooks for a table */
  //   @Get('webhooks/sentevents/:table')
  //   @Public()
  //   async getSentEvents(
  //     @Query('table') table: string,
  //     @Query('action') action: WebhookAction,
  //   ): Promise<any> {
  //     const webhooks = await this.paymentService.getSentEvents(table, action);
  //     return webhooks;
  //   }

  /** Get configured webhook list */
  // @Patch('webhooks/:id')
  // @Public()
  // @ApiBody({ type: EditWebhookDTO })
  // @ApiOkResponse({ type: WebhookDTO })
  // async updateWebhook(@Param('id') id: string, @Body() dto: EditWebhookDTO): Promise<WebhookDTO> {
  //   const webhook = await this.paymentService.updateWebhook(id, dto);
  //   return webhook;
  // }

  // @Delete('webhooks/:id')
  // @Public()
  // async deleteWebhook(@Param('id') id: string): Promise<any> {
  //   const webhook = await this.paymentService.deleteWebhook(id);
  //   return webhook;
  // }
}
