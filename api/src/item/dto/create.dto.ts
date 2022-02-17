import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsMongoId, IsNotEmpty, IsOptional } from 'class-validator';
import { SessionDTO } from 'src/auth';
import { FileDTO } from 'src/components/file';

export class CreateItemDTO {
  @ApiProperty()
  @IsNotEmpty()
  name: string;
  @ApiProperty({ required: false })
  description?: string;
  @ApiProperty({ required: false })
  @Type(() => Number)
  @IsOptional()
  price?: number;
  @ApiProperty({ required: false })
  option?: string;
  @ApiProperty({ type: FileDTO, required: false })
  mainImage?: FileDTO;
  @ApiProperty({ type: [FileDTO], required: false })
  images?: FileDTO[];
  @ApiProperty()
  @IsMongoId()
  businessId: string;

  /** set by the system */
  user: SessionDTO;
}
