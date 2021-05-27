// import {
//   Body,
//   Controller,
//   Delete,
//   Get,
//   Param,
//   Post,
//   Put,


//   Request, UploadedFile,
//   UseGuards,

//   UseInterceptors
// } from '@nestjs/common';
// import { FileInterceptor } from '@nestjs/platform-express';
// import { ApiBody, ApiHeader, ApiOkResponse, ApiTags } from '@nestjs/swagger';
// import * as path from 'path';
// import { Role } from 'src/auth/constants';
// import { AuthGuard } from 'src/auth/guards';
// import { ACCESS_TOKEN } from 'src/constants';
// import { ImageService } from '../image/image.service';
// import { IRequest } from '../mainModels';
// import { CreateRestaurantDTO, RestaurantResponseDTO, UpdateRestaurantDTO } from './dto';
// import { RestaurantService } from './restaurant.service';

// @Controller('restaurant')
// @ApiTags('Restaurants')
// export class RestaurantController {
//   constructor(private readonly restaurantService: RestaurantService, private readonly imageService: ImageService) { }

//   @Post('image')
//   @UseGuards(new AuthGuard([Role.RESTAURANT_OWNER]))
//   @ApiHeader({ name: ACCESS_TOKEN })
//   @UseInterceptors(FileInterceptor('logo'))
//   async uploadImage(@UploadedFile() file,) {
//     const fileURLs = await this.imageService.saveEventImage(file);

//     // createRestaurantDTO.logoUrl = fileURLs ? fileURLs.imageUrl : null;

//     return fileURLs;

//   }

//   @Post()
//   @UseGuards(new AuthGuard([Role.RESTAURANT_OWNER]))
//   @ApiBody({ type: CreateRestaurantDTO })
//   @ApiHeader({ name: ACCESS_TOKEN })
//   @ApiOkResponse({ type: RestaurantResponseDTO })
//   async createRestaurant(@Body() createRestaurantDTO: CreateRestaurantDTO, @Request() req: any): Promise<any> {

//     const restaurant = await this.restaurantService.create(createRestaurantDTO, req.body.user._id.toString());

//     const createQr = await this.restaurantService.createQr(restaurant.id);

//     const qr = await this.imageService.saveQRImage(path.join(__dirname, '../../qrCodes/qrCode.png'));

//     return { restaurant};
//   }

//   @Get()
//   @UseGuards(new AuthGuard([Role.RESTAURANT_OWNER]))
//   @ApiHeader({ name: ACCESS_TOKEN })
//   async getRestaurant() {

//     const restaurant = await this.restaurantService.getAllRestaurant();
//     return restaurant;

//   }

//   @Get('byToken')
//   @ApiHeader({ name: ACCESS_TOKEN })
//   @UseGuards(new AuthGuard([Role.RESTAURANT_OWNER]))
//   async getRestaurantById(@Request() req: IRequest) {
//     const restaurant = await this.restaurantService.getRestaurantById(req.body.user._id.toString());
//     return restaurant;

//   }

//   @Put(':id')
//   @ApiHeader({ name: ACCESS_TOKEN })
//   @ApiBody({ type: UpdateRestaurantDTO })
//   @UseGuards(new AuthGuard([Role.RESTAURANT_OWNER]))
//   async update(@Request() req: IRequest, @Param('id') id: string, @Body() updateRestaurantDto: UpdateRestaurantDTO) {
//     const updateRestaurant = await this.restaurantService.updateRestaurant(req.body.user._id.toString(), id, updateRestaurantDto);

//     return updateRestaurant;

//   }

//   @Delete(':id')
//   @UseGuards(new AuthGuard([Role.RESTAURANT_OWNER]))
//   async remove(@Request() req: IRequest, @Param('id') id: string) {

//     const deleteRestaurant = await this.restaurantService.deleteRestaurant(req.body.user._id.toString(), id);
//     await this.imageService.deleteImages([
//       deleteRestaurant.logoUrl,
//     ]);

//     return { status: true, message: `Successfully deleted`, data: null };
//   }

// }
