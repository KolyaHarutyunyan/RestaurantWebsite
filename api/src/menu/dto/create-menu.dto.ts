import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUrl } from 'class-validator';

export class CreateMenuDto {
    @ApiProperty()
    @IsNotEmpty()
    restaurantId: string;

    @ApiProperty()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ required: false })
    tagline: string;

    @ApiProperty({ required: false })
    menuImg: string;

    @ApiProperty({ required: false })
    description: string;

    @ApiProperty({ required: false })
    foodCategories: Array<Object>;

    @ApiProperty({ required: false })
    drinkCategories: Array<Object>;

    @ApiProperty()
    isActive: boolean
}
