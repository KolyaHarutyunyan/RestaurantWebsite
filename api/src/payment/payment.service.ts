import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { IItem } from 'src/item';
import { ItemModel } from 'src/item/item.model';
import { CreateWebhookDTO } from './dto/create.dto';
import { WebhookDTO } from './dto/payment.dto';
import { EditWebhookDTO } from './dto/update.dto';
import Stripe from 'stripe';
import { Keys } from './payment.constants';
import { BASE_URL } from '../util/constants';
import { SessionDTO } from '../auth';

const stripe = new Stripe(Keys.skey, {
  apiVersion: '2022-08-01',
});

@Injectable()
export class PaymentService {
  constructor() {
    this.model = ItemModel;
  }
  private model: Model<IItem>;

  /** Public API */
  /** Create a new payment */
  async create(dto: any): Promise<any> {
    const event = dto;
    // Handle the event
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object;
        console.log(`PaymentIntent for ${paymentIntent.amount} was successful!`);
        // Then define and call a method to handle the successful payment intent.
        // handlePaymentIntentSucceeded(paymentIntent);
        break;
      case 'payment_method.canceled':
        const paymentCancel = event.data.object;
        // Then define and call a method to handle the successful attachment of a PaymentMethod.
        // handlePaymentMethodAttached(paymentMethod);
        break;
      case 'payment_method.payment_failed':
        const paymentFaile = event.data.object;
        // Then define and call a method to handle the successful attachment of a PaymentMethod.
        // handlePaymentMethodAttached(paymentMethod);
        break;
      default:
        // Unexpected event type
        console.log(`Unhandled event type ${event.type}.`);
    }
    // const item = await this.model.findById('6272182cbe4fb8640f63294e');
    // item.images.push(dto);
    // return 'ok';
  }
  /** create the subscription */
  async createSubscription(customerId: string, items: Array<string>): Promise<any> {
    const subItems = [];
    items.map((item) => {
      subItems.push({ price: item });
    });
    const createSub = await stripe.subscriptions.create({
      customer: customerId,
      items: subItems,
    });
    return createSub;
  }
  /** cancel the subscription */
  async cancelSubscription(subId: string): Promise<any> {
    const cancelSub = await stripe.subscriptions.del(subId);
    return cancelSub;
  }
  /** Create a new payment */
  //   async refund(id: string, user: SessionDTO): Promise<any> {
  //     const user = await this.ownerService.get(user.id);
  //     user.packages.forEach((package) => {

  //     });
  //   }
  //   /** Get the webhooks  */
  //   async getWebhooks(): Promise<any> {
  //     const webhookEndpoints = await stripe.webhookEndpoints.list({
  //       limit: 10,
  //     });
  //     return webhookEndpoints;
  //   }

  /** Get the events that the erply sent */
  //   async getSentEvents(table: string, action: WebhookAction): Promise<IErplyWebhookData> {
  //     const setup = await this.model.findOne();
  //     const baseUrl = await this.getEndpointUrl(Endpoints.webhook, setup.clientCode);
  //     const sesssionKey = await this.getErplySession(
  //       setup.username,
  //       setup.clientCode,
  //       setup.password,
  //     );
  //     try {
  //       const { data } = await axios.get(`${baseUrl}v1/webhook?table=${table}&action=${action}`, {
  //         headers: { sessionKey: sesssionKey, clientCode: setup.clientCode },
  //       });
  //       return data;
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }

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

  // {
  //     "id": "evt_1LombgHoKYb9ljrZZr7PLq70",
  //     "object": "event",
  //     "api_version": "2022-08-01",
  //     "created": 1664795684,
  //     "data": {
  //       "object": {
  //         "id": "seti_1LombgHoKYb9ljrZDy1PgWls",
  //         "object": "setup_intent",
  //         "application": null,
  //         "cancellation_reason": null,
  //         "client_secret": "seti_1LombgHoKYb9ljrZDy1PgWls_secret_MXsMt53bm78N1NdyaulugCKEYtWjeCu",
  //         "created": 1664795684,
  //         "customer": null,
  //         "description": null,
  //         "flow_directions": null,
  //         "last_setup_error": null,
  //         "latest_attempt": null,
  //         "livemode": false,
  //         "mandate": null,
  //         "metadata": {},
  //         "next_action": null,
  //         "on_behalf_of": null,
  //         "payment_method": "pm_1Lombg2eZvKYlo2CqFPxAEd1",
  //         "payment_method_options": {
  //           "acss_debit": {
  //             "currency": "cad",
  //             "mandate_options": {
  //               "interval_description": "First day of every month",
  //               "payment_schedule": "interval",
  //               "transaction_type": "personal"
  //             },
  //             "verification_method": "automatic"
  //           }
  //         },
  //         "payment_method_types": [
  //           "acss_debit"
  //         ],
  //         "single_use_mandate": null,
  //         "status": "requires_confirmation",
  //         "usage": "off_session"
  //       }
  //     },
  //     "livemode": false,
  //     "pending_webhooks": 0,
  //     "request": {
  //       "id": null,
  //       "idempotency_key": null
  //     },
  //     "type": "setup_intent.created"
  //   }
}