import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';
import { DTO } from '../../util/dto';
import { WebhookAction } from '../payment.constants';

export class EditWebhookDTO {
  @ApiProperty({ enum: WebhookAction, required: false })
  @IsEnum(WebhookAction)
  @IsOptional()
  action?: WebhookAction;
  @ApiProperty({ required: false })
  @IsOptional()
  disabled?: boolean;
  @ApiProperty({ required: false })
  @IsUrl()
  @IsOptional()
  endpoint?: string;
  @ApiProperty({ required: false })
  @IsOptional()
  secret?: string;
  @ApiProperty({ required: false })
  @IsOptional()
  table?: string;
}

export class UpdatePaymentDTO extends DTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  subId: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  orderId: string;
}
