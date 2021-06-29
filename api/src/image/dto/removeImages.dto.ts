import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsMongoId, IsNotEmpty, IsString } from 'class-validator';

export class RemoveImagesDTO {
  @ApiProperty()
  // @IsNotEmpty({ each: true })
  // @IsArray()
  @IsMongoId({ each: true })
  imageIds: string[];

  /** Set by the system */
  userId: string;
}
