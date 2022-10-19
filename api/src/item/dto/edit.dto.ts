import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
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
  @ApiProperty({ type: Number, required: false })
  mainImage?: number;
  @ApiProperty({ type: [FileDTO], required: false })
  imagesToAdd?: FileDTO[];
  @ApiProperty({ type: [FileDTO], required: false })
  imagesToRemove?: FileDTO[];
  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  active: boolean;
  @ApiProperty()
  @IsString()
  @IsOptional()
  note: string;
  /** set by the system */
  user: SessionDTO;
}
