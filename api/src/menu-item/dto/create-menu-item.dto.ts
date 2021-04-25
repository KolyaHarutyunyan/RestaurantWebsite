import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUrl,Contains } from 'class-validator';
export class CreateMenuItemDto {
    @ApiProperty()
    @IsNotEmpty()
    categoryId: string;

    @ApiProperty()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    description?: string;

    @ApiProperty()
    option?: string;

    @ApiProperty()
    @IsNotEmpty()
    price: number;

    @ApiProperty()
    images?: string;
}
