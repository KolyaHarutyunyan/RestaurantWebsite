import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { IItem } from '../item';
import { ItemModel } from '../item/item.model';
import { CreatePaymentDTO } from './dto/create.dto';
import { EditWebhookDTO, UpdatePaymentDTO } from './dto/update.dto';
import Stripe from 'stripe';
import { Keys } from './payment.constants';
import { BASE_URL } from '../util/constants';
import { AuthService } from '../auth/auth.service';
import { SessionDTO } from '../auth';
import { ProductDTO } from './dto/payment.dto';
import { PaymentSanitizer } from './payment.sanitizer';

const stripe = new Stripe(Keys.skey, {
  apiVersion: '2022-08-01',
});

@Injectable()
export class PaymentService {
  constructor(private authService: AuthService, private readonly sanitizer: PaymentSanitizer) {
    this.model = ItemModel;
  }
  private model: Model<IItem>;

  /** Public API */
  /** create the products */
  async createProduct(name: string, active: boolean): Promise<ProductDTO> {
    try {
      const product = await stripe.products.create({
        name,
        active: active == undefined ? true : active,
      });
      return this.sanitizer.sanitizeProduct(product);
    } catch (e) {
      throw new HttpException('Can not create product', HttpStatus.BAD_REQUEST);
    }
  }

  /** get the products */
  async getProducts(): Promise<ProductDTO[]> {
    const products = await stripe.products.list();
    return this.sanitizer.sanitizeProductMany(products.data);
  }

  /** delete the products */
  async deleteProduct(productId: string): Promise<string> {
    const product = await stripe.products.del(productId);
    return product.id;
  }

  /** refund the subscription */
  async refundSub(chargeId: string) {
    try {
      const refund = await stripe.refunds.create({
        charge: chargeId,
      });
      return refund;
    } catch (e) {
      throw new HttpException(`Can not refund the subscription ${e}`, HttpStatus.BAD_REQUEST);
    }
  }

  /** Create a new payment */
  async create(dto: any): Promise<any> {
    const event = dto;
    // Handle the event
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object;
        let item = await this.model.findById('6272182cbe4fb8640f63294e');
        item.testWebhook.push(paymentIntent);
        await item.save();
        console.log(`PaymentIntent for ${paymentIntent.amount} was successful!`);
        // Then define and call a method to handle the successful payment intent.
        // handlePaymentIntentSucceeded(paymentIntent);
        break;
      case 'payment_method.canceled':
        const paymentCancel = event.data.object;
        item = await this.model.findById('6272182cbe4fb8640f63294e');
        item.testWebhook.push(paymentCancel);
        await item.save();
        // Then define and call a method to handle the successful attachment of a PaymentMethod.
        // handlePaymentMethodAttached(paymentMethod);
        break;
      case 'payment_method.payment_failed':
        const paymentFaile = event.data.object;
        item = await this.model.findById('6272182cbe4fb8640f63294e');
        item.testWebhook.push(paymentFaile);
        await item.save();
        // Then define and call a method to handle the successful attachment of a PaymentMethod.
        // handlePaymentMethodAttached(paymentMethod);
        break;
      case 'customer.subscription.created	':
        const subCreate = event.data.object;
        item = await this.model.findById('6272182cbe4fb8640f63294e');
        item.testWebhook.push(subCreate);
        await item.save();
        // Then define and call a method to handle the successful attachment of a PaymentMethod.
        // handlePaymentMethodAttached(paymentMethod);
        break;
      case 'customer.subscription.deleted	':
        const subDelete = event.data.object;
        item = await this.model.findById('6272182cbe4fb8640f63294e');
        item.testWebhook.push(subDelete);
        await item.save();
        // Then define and call a method to handle the successful attachment of a PaymentMethod.
        // handlePaymentMethodAttached(paymentMethod);
        break;
      case 'customer.subscription.updated	':
        const subUpdate = event.data.object;
        item = await this.model.findById('6272182cbe4fb8640f63294e');
        item.testWebhook.push(subUpdate);
        await item.save();
        // Then define and call a method to handle the successful attachment of a PaymentMethod.
        // handlePaymentMethodAttached(paymentMethod);
        break;
      default:
        // Unexpected event type
        item = await this.model.findById('6272182cbe4fb8640f63294e');
        item.testWebhook.push('defaulet');
        await item.save();
        console.log(`Unhandled event type ${event.type}.`);
    }
    // const item = await this.model.findById('6272182cbe4fb8640f63294e');
    // item.images.push(dto);
    // return 'ok';
  }

  /** create the subscription */
  async createSubscription(dto: CreatePaymentDTO): Promise<Stripe.Subscription> {
    try {
      const customers = await stripe.customers.search({
        query: `email:'${dto.user.email}'`,
      });
      customers.data.forEach((customer) => {
        if (customer.email === dto.user.email) {
          throw new HttpException(
            `Can not create subscription, email must be unique`,
            HttpStatus.BAD_REQUEST,
          );
        }
      });
      const customer = await stripe.customers.create({
        description: `email - ${dto.user.email}`,
        email: dto.user.email,
        payment_method: dto.paymentMethod,
        invoice_settings: { default_payment_method: dto.paymentMethod },
      });
      const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: [
          {
            price_data: {
              currency: 'USD',
              product: dto.productId,
              unit_amount: dto.amount,
              recurring: {
                interval: 'month',
              },
            },
          },
        ],
        payment_settings: {
          payment_method_types: ['card'],
          save_default_payment_method: 'on_subscription',
        },
        expand: ['latest_invoice.payment_intent'],
      });
      await this.authService.addPackage(dto.user.id, dto.productId);
      return subscription;
    } catch (e) {
      throw new HttpException(`Can not create subscription ${e}`, HttpStatus.BAD_REQUEST);
    }
  }

  /** update the subscription */
  async updateSubscription(user: SessionDTO): Promise<any> {
    const customer = await stripe.customers.search({
      query: `email:'ddd-959@mail.ru'`,
    });
    this.checkCustomer(customer);
    const subscriptions = await stripe.subscriptions.list({
      customer: customer.data[0].id,
    });
    this.checkSubscription(subscriptions);
    // return subscriptions.data[0].id;
    // this.checkCustomer(customer);
    const updateSubscription = await stripe.subscriptions.update(subscriptions.data[0].id);
    return updateSubscription;
    // const subscription = await stripe.subscriptions.update(dto.subId, {
    //   metadata: { order_id: dto.orderId },
    // });
    // console.log(subscription, 'subscriptiooo');
    // return subscription;
  }

  /** cancel the subscription */
  async cancelSubscription(user: SessionDTO, subId: string): Promise<string> {
    try {
      const cancelSub = await stripe.subscriptions.del(subId);
      await this.authService.deletePackage(user.id);
      return cancelSub.id;
    } catch (e) {
      throw new HttpException(`Can not cancel the subscription`, HttpStatus.NOT_FOUND);
    }
  }

  /** get customer subscriptions */
  async getSubscriptions(
    user: SessionDTO,
    limit: number,
    page: number,
  ): Promise<Stripe.ApiList<Stripe.Subscription>> {
    const customer = await stripe.customers.search({
      query: `email:'${user.email}'`,
    });
    this.checkCustomer(customer);
    const subscriptions = await stripe.subscriptions.list({
      customer: customer.data[0].id,
    });
    return subscriptions;
  }

  /** get customer cards information */
  async getCards(user: SessionDTO, limit: number, page: number): Promise<any> {
    try {
      const customer = await stripe.customers.search({
        query: `email:'${user.email}'`,
      });
      this.checkCustomer(customer);
      const cards = await stripe.customers.listSources(customer.data[0].id, {
        object: 'card',
        limit,
      });
      return cards;
    } catch (e) {
      throw new HttpException(`Can not get cards info`, HttpStatus.NOT_FOUND);
    }
  }

  /** Add a webhook here */
  async addWebhook(): Promise<any> {
    try {
      const webhookEndpoint = await stripe.webhookEndpoints.create({
        url: `${BASE_URL}/payments`,
        enabled_events: [
          'payment_intent.succeeded',
          'payment_intent.canceled',
          'payment_intent.payment_failed',
        ],
      });
    } catch (e) {
      throw new HttpException('Can not add webhook', HttpStatus.BAD_REQUEST);
    }
  }

  /** Update an existing webhook */
  async updateWebhook(id: string, dto: EditWebhookDTO): Promise<any> {
    // const setup = await this.model.findOne();
    // const [baseUrl, sessionKey] = await Promise.all([
    //   this.getEndpointUrl(Endpoints.webhook, setup.clientCode),
    //   this.getErplySession(setup.username, setup.clientCode, setup.password),
    // ]);
    // const { data } = await axios.put(`${baseUrl}v1/webhook-configuration/${id}`, dto, {
    //   headers: { sessionKey: sessionKey, clientCode: setup.clientCode },
    // });
    // return data;
  }

  /** Delete a webhook */
  async deleteWebhook(id: string) {
    //     const setup = await this.model.findOne();
    //     const [baseUrl, sessionKey] = await Promise.all([
    //       this.getEndpointUrl(Endpoints.webhook, setup.clientCode),
    //       this.getErplySession(setup.username, setup.clientCode, setup.password),
    //     ]);
    //     const { data } = await axios.delete(`${baseUrl}v1/webhook-configuration/${id}`, {
    //       headers: { sessionKey: sessionKey, clientCode: setup.clientCode },
    //     });
    //     return data;
    //   }
  }

  /** check customer */
  private checkCustomer(customer) {
    if (!customer.data.length) {
      throw new HttpException(`Customer was not found`, HttpStatus.NOT_FOUND);
    }
  }
  /** check subscription */
  private checkSubscription(sub) {
    if (!sub.data.length) {
      throw new HttpException(`Subscription was not found`, HttpStatus.NOT_FOUND);
    }
  }
}
