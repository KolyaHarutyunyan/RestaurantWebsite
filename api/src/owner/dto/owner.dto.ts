import { ApiProperty } from '@nestjs/swagger';
import { FileDTO } from 'src/components/file';

export class OwnerDTO {
  @ApiProperty()
  id: string;
  @ApiProperty()
  fullName: string;
  @ApiProperty()
  email: string;
  @ApiProperty({ type: FileDTO, required: false })
  avatar?: FileDTO;
  @ApiProperty({
    required: false,
    description: 'use this one if it exists and avatar does not exist',
  })
  socialAvatar?: string;
}
