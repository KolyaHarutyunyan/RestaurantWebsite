import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { FileDTO } from 'src/components/file';
import { DTO } from 'src/util/dto';
import { CategoryType } from '../menu.constants';

export class EditMenuDTO extends DTO {
  @ApiProperty()
  @IsNotEmpty()
  businessId: string;
  @ApiProperty({ required: false })
  name?: string;
  @ApiProperty({ required: false })
  tagline?: string;
  @ApiProperty({ required: false })
  description?: string;
  @ApiProperty({ type: FileDTO, required: false })
  image?: FileDTO;
  @ApiProperty({ required: false })
  removeImage?: boolean;
}

export class EditCategoryDTO extends DTO {
  @ApiProperty()
  name: string;

  @ApiProperty({ enum: CategoryType })
  @IsEnum(CategoryType)
  type: CategoryType;
}
