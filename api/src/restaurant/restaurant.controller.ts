import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Role } from 'src/auth/constants';
import { AuthGuard } from 'src/auth/guards';
import { CreateRestaurantDTO, RestaurantResponseDTO } from './dto';
import { RestaurantService } from './restaurant.service';

@Controller('restaurant')
@ApiTags('Restaurants')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}
  
  @Post()
  @UseGuards(new AuthGuard([Role.RESTAURANT_OWNER]))
  @UseInterceptors(FileInterceptor('logo'))
  @ApiBody({ type: CreateRestaurantDTO })
  @ApiOkResponse({ type: RestaurantResponseDTO })
  async createRestaurant(
    @UploadedFile() File,
    @Body() createRestaurantDTO: CreateRestaurantDTO,
  ): Promise<RestaurantResponseDTO> {
    const restaurant = await this.restaurantService.create(createRestaurantDTO);
    return restaurant;
  }
}
