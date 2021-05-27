// import { Controller, Get, Post, Body, Put, Param, Delete, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
// import { ApiBody, ApiHeader, ApiTags } from '@nestjs/swagger';
// import { ACCESS_TOKEN, Role } from 'src/auth/constants';
// import { AuthGuard } from 'src/auth/guards';
// import { CategoryService } from './category.service';
// import { CreateCategoryDto } from './dto/create-category.dto';
// import { UpdateCategoryDto } from './dto/update-category.dto';

// @Controller('category')
// @ApiTags('categories')
// export class CategoryController extends Object {
//   constructor(private readonly categoryService: CategoryService) {super()}

//   @Post()
//   @UseGuards(new AuthGuard([Role.RESTAURANT_OWNER]))
//   @ApiHeader({ name: ACCESS_TOKEN })
//   @ApiBody({ type: CreateCategoryDto })
//   async create(@Body() createCategoryDto: CreateCategoryDto) {
//     // if(createCategoryDto.name !== "drinkCategories" && createCategoryDto.name !== "foodCategories"){

//     //     return (new HttpException('BadGatewayException', HttpStatus.BAD_GATEWAY));

//     // }

//     const createCategory = await this.categoryService.create(createCategoryDto);
    
//     return createCategory;
//   }


//   @Post(':categoryId/addMenuItem')
//   @UseGuards(new AuthGuard([Role.RESTAURANT_OWNER]))
//   @ApiHeader({ name: ACCESS_TOKEN })
//   async addMenuItem(@Body('menuItemId') menuItemId: string, @Param('categoryId') categoryId: string) {
//     const createCategory = await this.categoryService.addMenuItem(menuItemId,categoryId);


//     return createCategory;
//   }

//   @Post('getCategories')
//   @UseGuards(new AuthGuard([Role.RESTAURANT_OWNER]))
//   @ApiHeader({ name: ACCESS_TOKEN })
//   async findAll(@Param('restaurantId') restaurantId: string) {
//    const allCategories = await this.categoryService.getAll(restaurantId);
//     return allCategories;
    
//   }
//   @Get('getCategories')
//   @UseGuards(new AuthGuard([Role.RESTAURANT_OWNER]))
//   @ApiHeader({ name: ACCESS_TOKEN })
//   async findAllCategories() {
//    const allCategories = await this.categoryService.getAllCategories();
//     return allCategories;
    
//   }

//   @Get(':id')
//   @UseGuards(new AuthGuard([Role.RESTAURANT_OWNER]))
//   @ApiHeader({ name: ACCESS_TOKEN })
//   findOne(@Param('id') id: string) {
//     return this.categoryService.findOne(id);
//   }

//   @Put(':id')
//   update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
//     return this.categoryService.update(+id, updateCategoryDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.categoryService.remove(+id);
//   }
// }
