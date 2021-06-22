import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class RemoveImagesDTO {
  @ApiProperty()
  @IsNotEmpty({ each: true })
  @IsArray()
  @IsString({ each: true })
  imageIds: string[];

  /** Set by the system */
  userId: string;
}
