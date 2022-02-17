import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty } from 'class-validator';
import { SessionDTO } from 'src/auth';
import { FileDTO } from 'src/components/file';

export class CreateMenuDTO {
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
  image: FileDTO;

  /** Set by server */
  user: SessionDTO;
}
