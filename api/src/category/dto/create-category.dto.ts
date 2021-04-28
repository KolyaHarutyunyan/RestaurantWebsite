import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUrl,Contains } from 'class-validator';

export class CreateCategoryDto extends Object {
    @ApiProperty()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    restaurantId: string;
}
