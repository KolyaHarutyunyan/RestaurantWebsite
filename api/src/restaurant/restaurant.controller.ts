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
  UseInterceptors
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Role } from 'src/auth/constants';
import { AuthGuard } from 'src/auth/guards';
import { CreateRestaurantDTO, RestaurantResponseDTO, UpdateRestaurantDTO } from './dto';
import { RestaurantService } from './restaurant.service';
import { ImageService } from '../image/image.service';

// NNkar@ ipload era pahe bazayi mej url@

@Controller('restaurant')
@ApiTags('Restaurants')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService, private readonly imageService: ImageService) { }

  @Post()
  @UseGuards(new AuthGuard([Role.RESTAURANT_OWNER]))
  @UseInterceptors(FileInterceptor('logo'))
  @ApiBody({ type: CreateRestaurantDTO })
  @ApiOkResponse({ type: RestaurantResponseDTO })
  async createRestaurant(@UploadedFile() file, @Body() createRestaurantDTO: CreateRestaurantDTO): Promise<RestaurantResponseDTO> {

    const fileURLs = await this.imageService.saveEventImage(file);

    createRestaurantDTO.logoUrl = fileURLs ? fileURLs.imageUrl : null;
    
    const restaurant = await this.restaurantService.create(createRestaurantDTO);
    return restaurant;
  }

  @Get()
  @UseGuards(new AuthGuard([Role.RESTAURANT_OWNER]))
  async getRestaurant() {

    const restaurant = await this.restaurantService.getAllRestaurant();
    return restaurant;

  }

  @Get(':id')
  @UseGuards(new AuthGuard([Role.RESTAURANT_OWNER]))
  async getRestaurantById(@Param('id') id: string) {

    const restaurant = await this.restaurantService.getRestaurantById(id);
    return restaurant;

  }

  @Put(':id')
  @UseGuards(new AuthGuard([Role.RESTAURANT_OWNER]))
  async update(@Param('id') id: string, @Body() updateRestaurantDto: UpdateRestaurantDTO) {

    const updateRestaurant = await this.restaurantService.updateRestaurant(id, updateRestaurantDto);

    return updateRestaurant;

  }

  @Delete(':id')
  @UseGuards(new AuthGuard([Role.RESTAURANT_OWNER]))
  async remove(@Param('id') id: string) {

    const deleteRestaurant = await this.restaurantService.deleteRestaurant(id);

    return deleteRestaurant;
  }

}
