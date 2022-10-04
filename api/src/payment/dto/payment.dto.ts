import { ApiProperty } from '@nestjs/swagger';

export class WebhookDTO {
  @ApiProperty()
  id: string;
  @ApiProperty()
  action: string;
  @ApiProperty()
  createdAt: string;
  @ApiProperty()
  endpoint: string;
  @ApiProperty()
  disabled: boolean;
  @ApiProperty()
  table: string;
  @ApiProperty()
  tries: number;
  @ApiProperty()
  secret: string;
  @ApiProperty()
  updatedat: string;
  @ApiProperty()
  clientCode: string;
}
