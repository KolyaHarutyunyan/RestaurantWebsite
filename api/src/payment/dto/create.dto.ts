import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
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
  @IsNotEmpty()
  @IsString()
  paymentMethod: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  productId: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  amount: number;
}
