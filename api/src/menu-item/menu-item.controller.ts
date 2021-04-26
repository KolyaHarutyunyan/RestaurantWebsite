import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { MenuItemService } from './menu-item.service';
import { CreateMenuItemDto } from './dto/create-menu-item.dto';
import { UpdateMenuItemDto } from './dto/update-menu-item.dto';
import { AuthGuard } from 'src/auth/guards';
import { Role } from 'src/auth/constants';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageService } from '../image/image.service';

@Controller('menuItem')
export class MenuItemController {
  constructor(private readonly menuItemService: MenuItemService, private readonly imageService: ImageService) { }

  @Post()
  @UseGuards(new AuthGuard([Role.RESTAURANT_OWNER]))
  @UseInterceptors(FileInterceptor('menuItemImg'))
  async create(@UploadedFile() file, @Body() createMenuItemDto: CreateMenuItemDto) {

    const fileURLs = await this.imageService.saveEventImage(file);

    createMenuItemDto.imageUrl = fileURLs ? fileURLs.imageUrl : null;
    createMenuItemDto.thumbnailUrl = fileURLs ? fileURLs.thumbnailUrl : null;

    const addMenuItem = await this.menuItemService.create(createMenuItemDto);
    return addMenuItem;
  }

  @Get()
  findAll() {
    return this.menuItemService.findAll();
  }

  @Get(':id')
  @UseGuards(new AuthGuard([Role.RESTAURANT_OWNER]))
  findOne(@Param('id') id: string) {
    return this.menuItemService.findOne(id);
  }

  @Put(':id')
  @UseGuards(new AuthGuard([Role.RESTAURANT_OWNER]))
  async update(@Param('id') id: string, @Body() updateMenuItemDto: UpdateMenuItemDto) {
    const updateMenuItem = await this.menuItemService.update(id, updateMenuItemDto);

    return updateMenuItem;
  }

  @Delete(':id')
  @UseGuards(new AuthGuard([Role.RESTAURANT_OWNER]))
  async remove(@Param('id') id: string) {

    const deleteMenuItem = await this.menuItemService.remove(id);

    return deleteMenuItem;
  }
}
