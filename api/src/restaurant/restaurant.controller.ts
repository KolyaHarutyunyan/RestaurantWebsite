import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseGuards,
  Request,
  UseInterceptors
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiHeader, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { Role } from 'src/auth/constants';
import { AuthGuard } from 'src/auth/guards';
import { CreateRestaurantDTO, RestaurantResponseDTO, UpdateRestaurantDTO } from './dto';
import { RestaurantService } from './restaurant.service';
import { ImageService } from '../image/image.service';
import { ACCESS_TOKEN } from 'src/constants';
import * as path from 'path';


@Controller('restaurant')
@ApiTags('Restaurants')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService, private readonly imageService: ImageService) { }

  @Post()
  @UseGuards(new AuthGuard([Role.RESTAURANT_OWNER]))
  @UseInterceptors(FileInterceptor('logo'))
  @ApiBody({ type: CreateRestaurantDTO })
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOkResponse({ type: RestaurantResponseDTO })
  async createRestaurant(@UploadedFile() file, @Body() createRestaurantDTO: CreateRestaurantDTO): Promise<any> {

    const fileURLs = await this.imageService.saveEventImage(file);

    createRestaurantDTO.logoUrl = fileURLs ? fileURLs.imageUrl : null;


    const restaurant = await this.restaurantService.create(createRestaurantDTO);

    const createQr = await this.restaurantService.createQr(restaurant.id);

    const qr = await this.imageService.saveQRImage(path.join(__dirname, '../../qrCodes/qrCode.png'));

    return { restaurant, qr };
  }

  @Get()
  @UseGuards(new AuthGuard([Role.RESTAURANT_OWNER]))
  @ApiHeader({ name: ACCESS_TOKEN })
  async getRestaurant() {

    const restaurant = await this.restaurantService.getAllRestaurant();
    return restaurant;

  }

  @Get('byToken')
  @ApiHeader({ name: ACCESS_TOKEN })
  @UseGuards(new AuthGuard([Role.RESTAURANT_OWNER]))
  async getRestaurantById(@Request() req: any) {
    const restaurant = await this.restaurantService.getRestaurantById(req.body.user._id.toString());
    return restaurant;

  }

  @Put(':id')
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiBody({ type: UpdateRestaurantDTO })
  @UseGuards(new AuthGuard([Role.RESTAURANT_OWNER]))
  async update(@Param('id') id: string, @Body() updateRestaurantDto: UpdateRestaurantDTO) {

    const updateRestaurant = await this.restaurantService.updateRestaurant(id, updateRestaurantDto);

    return updateRestaurant;

  }

  @Delete(':id')
  @UseGuards(new AuthGuard([Role.RESTAURANT_OWNER]))
  async remove(@Param('id') id: string) {

    const deleteRestaurant = await this.restaurantService.deleteRestaurant(id);
    await this.imageService.deleteImages([
      deleteRestaurant.logoUrl,
    ]);

    return { status: true, message: `Successfully deleted`, data: null };
  }

}
