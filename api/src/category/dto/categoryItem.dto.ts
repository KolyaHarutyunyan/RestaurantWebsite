import { ApiProperty } from '@nestjs/swagger';
import { ItemDTO } from '../../item';

export class CategoryItemDTO {
  @ApiProperty()
  rank: number;
  @ApiProperty({ type: ItemDTO })
  item: ItemDTO;
}
