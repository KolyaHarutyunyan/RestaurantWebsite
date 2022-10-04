import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';
import { WebhookAction } from '../payment.constants';

export class CreateWebhookDTO {
  @ApiProperty()
  @IsString()
  table: string;
  @ApiProperty({ enum: WebhookAction })
  @IsEnum(WebhookAction)
  action: WebhookAction;
}
