// import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
// import { MenuItemService } from './menu-item.service';
// import { CreateMenuItemDto } from './dto/create-menu-item.dto';
// import { UpdateMenuItemDto } from './dto/update-menu-item.dto';
// import { AuthGuard } from 'src/auth/guards';
// import { ACCESS_TOKEN, Role } from 'src/auth/constants';
// import { FileInterceptor } from '@nestjs/platform-express';
// import { ImageService } from '../image/image.service';
// import { ApiBody, ApiHeader, ApiTags } from '@nestjs/swagger';

// @Controller('menuItem')
// @ApiTags('menuItems')
// export class MenuItemController {
//   constructor(private readonly menuItemService: MenuItemService, private readonly imageService: ImageService) { }

//   @Post()
//   @UseGuards(new AuthGuard([Role.business_OWNER]))
//   @ApiHeader({ name: ACCESS_TOKEN })
//   @ApiBody({ type: CreateMenuItemDto })
//   @UseInterceptors(FileInterceptor('menuItemImg'))
//   async create(@UploadedFile() file, @Body() createMenuItemDto: CreateMenuItemDto) {

//     const fileURLs = await this.imageService.saveEventImage(file);

//     createMenuItemDto.imageUrl = fileURLs ? fileURLs.imageUrl : null;
//     createMenuItemDto.thumbnailUrl = fileURLs ? fileURLs.thumbnailUrl : null;

//     const addMenuItem = await this.menuItemService.create(createMenuItemDto);
//     return addMenuItem;
//   }

//   @Get()
//   @UseGuards(new AuthGuard([Role.business_OWNER]))
//   @ApiHeader({ name: ACCESS_TOKEN })
//   findAll() {
//     return this.menuItemService.findAll();
//   }

//   @Get(':id')
//   @UseGuards(new AuthGuard([Role.business_OWNER]))
//   @ApiHeader({ name: ACCESS_TOKEN })
//   findOne(@Param('id') id: string) {
//     return this.menuItemService.findOne(id);
//   }

//   @Put(':id')
//   @UseGuards(new AuthGuard([Role.business_OWNER]))
//   @ApiHeader({ name: ACCESS_TOKEN })
//   @ApiBody({ type: UpdateMenuItemDto })
//   async update(@Param('id') id: string, @Body() updateMenuItemDto: UpdateMenuItemDto) {
//     const updateMenuItem = await this.menuItemService.update(id, updateMenuItemDto);

//     return updateMenuItem;
//   }

//   @Delete(':id')
//   @UseGuards(new AuthGuard([Role.business_OWNER]))
//   async remove(@Param('id') id: string) {

//     const deleteMenuItem = await this.menuItemService.remove(id);
//     await this.imageService.deleteImages([
//       deleteMenuItem.images[0]['url'],
//       deleteMenuItem.images[0]['thumbURL'],
//     ]);

//     return { status: true, message: `Successfully deleted`, data: null };
//   }
// }
