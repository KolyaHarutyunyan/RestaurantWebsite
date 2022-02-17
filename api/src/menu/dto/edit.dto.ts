import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { SessionDTO } from 'src/auth';
import { FileDTO } from 'src/components/file';

export class EditMenuDTO {
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

  /** Set by the system */
  user?: SessionDTO;
}
