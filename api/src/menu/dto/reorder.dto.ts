import { ApiProperty } from '@nestjs/swagger';

export class ReorderDTO {
  @ApiProperty({ description: 'Original rank of this category' })
  from: number;
  @ApiProperty({ description: 'New rank of this category' })
  to: number;
  @ApiProperty({ description: 'The id of this category' })
  categoryId: string;
}
