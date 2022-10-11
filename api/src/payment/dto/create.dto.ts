import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';
import { DTO } from '../../util/dto';
import { WebhookAction } from '../payment.constants';

export class CreateWebhookDTO {
  @ApiProperty()
  @IsString()
  table: string;
  @ApiProperty({ enum: WebhookAction })
  @IsEnum(WebhookAction)
  action: WebhookAction;
}
export class CreatePaymentDTO extends DTO {
  @ApiProperty()
  paymentMethod: string;
  @ApiProperty()
  productId: string;
}
