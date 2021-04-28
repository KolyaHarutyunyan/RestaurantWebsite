import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUrl } from 'class-validator';

export class UpdateRestaurantDTO {
    @ApiProperty()
    @IsNotEmpty()
    name?: string;

    @ApiProperty()
    @IsNotEmpty()
    description?: string;

    @ApiProperty()
    @IsNotEmpty()
    website?: string;

    @ApiProperty()
    @IsNotEmpty()
    phoneNumber?: string;

    @ApiProperty()
    @IsNotEmpty()
    status?: boolean;
}
