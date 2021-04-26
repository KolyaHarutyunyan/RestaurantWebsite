import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Role } from 'src/auth/constants';
import { AuthGuard } from 'src/auth/guards';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageService } from '../image/image.service';
import { ApiBody, ApiHeader, ApiOkResponse } from '@nestjs/swagger';
import { ACCESS_TOKEN, RESET_TOKEN } from '../auth/constants';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService, private readonly imageService: ImageService) { }

  @Post()
  @UseGuards(new AuthGuard([Role.RESTAURANT_OWNER]))
  @ApiHeader({ name: ACCESS_TOKEN })
  @UseInterceptors(FileInterceptor('menuImg'))
  async create(@UploadedFile() file, @Body() createMenuDto: CreateMenuDto) {

    const fileURLs = await this.imageService.saveEventImage(file);

    createMenuDto.menuImg = fileURLs ? fileURLs.imageUrl : null;

    const createMenu = await this.menuService.create(createMenuDto);

    return createMenu;

  }

  @Get()
  @UseGuards(new AuthGuard([Role.RESTAURANT_OWNER]))
  async findAll() {

    const getAllMenu = await this.menuService.findAll();

    return getAllMenu;
  }

  @Get(':id')
  @UseGuards(new AuthGuard([Role.RESTAURANT_OWNER]))
  findOne(@Param('id') id: string) {
    return this.menuService.findOne(id);
  }

  @Put(':id')
  @UseGuards(new AuthGuard([Role.RESTAURANT_OWNER]))
  update(@Param('id') id: string, @Body() updateMenuDto: UpdateMenuDto) {
    return this.menuService.update(id, updateMenuDto);
  }

  @Delete(':id')
  @UseGuards(new AuthGuard([Role.RESTAURANT_OWNER]))
  remove(@Param('id') id: string) {
    return this.menuService.remove(id);
  }
}
