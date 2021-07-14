import { ApiProperty } from '@nestjs/swagger';

export class ToggleMenuDTO {
  @ApiProperty()
  businessId: string;
}
