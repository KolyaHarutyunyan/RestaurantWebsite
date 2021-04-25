import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { MenuItemService } from './menu-item.service';
import { CreateMenuItemDto } from './dto/create-menu-item.dto';
import { UpdateMenuItemDto } from './dto/update-menu-item.dto';
import { AuthGuard } from 'src/auth/guards';
import { Role } from 'src/auth/constants';

@Controller('menuItem')
export class MenuItemController {
  constructor(private readonly menuItemService: MenuItemService) { }

  @Post()
  @UseGuards(new AuthGuard([Role.RESTAURANT_OWNER]))
  async create(@Body() createMenuItemDto: CreateMenuItemDto) {
    const addMenuItem = await this.menuItemService.create(createMenuItemDto);
    return addMenuItem;
  }

  @Get()
  findAll() {
    return this.menuItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menuItemService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMenuItemDto: UpdateMenuItemDto) {
    return this.menuItemService.update(+id, updateMenuItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menuItemService.remove(+id);
  }
}
