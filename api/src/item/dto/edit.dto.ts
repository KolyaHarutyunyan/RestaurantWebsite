import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { SessionDTO } from 'src/auth';
import { FileDTO } from 'src/components/file';

export class EditItemDTO {
  @ApiProperty({ required: false })
  name?: string;
  @ApiProperty({ required: false })
  description?: string;
  @ApiProperty({ required: false })
  option?: string;
  @ApiProperty({ required: false })
  @IsOptional()
  @Type(() => Number)
  price?: number;
  @ApiProperty()
  @IsNotEmpty()
  businessId: string;
  @ApiProperty({ type: FileDTO, required: false })
  mainImage?: FileDTO;
  @ApiProperty({ type: [FileDTO], required: false })
  imagesToAdd?: FileDTO[];
  @ApiProperty({ type: [FileDTO], required: false })
  imagesToRemove?: FileDTO[];

  /** set by the system */
  user: SessionDTO;
}
