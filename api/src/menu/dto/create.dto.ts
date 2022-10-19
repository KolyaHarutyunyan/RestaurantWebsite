import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEnum, IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { FileDTO } from 'src/components/file';
import { DTO } from 'src/util/dto';
import { CategoryType } from '../menu.constants';

export class CreateMenuDTO extends DTO {
  @ApiProperty()
  @IsMongoId()
  businessId: string;
  @ApiProperty()
  @IsNotEmpty()
  name: string;
  @ApiProperty({ required: false })
  description: string;
  @ApiProperty({ required: false })
  tagline?: string;
  @ApiProperty({ type: FileDTO, required: false })
  image?: FileDTO;
}

export class CreateCategoryDTO extends DTO {
  @ApiProperty()
  @IsString()
  name: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  active: boolean;
  @ApiProperty({ enum: CategoryType })
  @IsEnum(CategoryType)
  type: CategoryType;
}

export class AddItemDTO extends DTO {
  @ApiProperty()
  @IsMongoId()
  itemId: string;
}
