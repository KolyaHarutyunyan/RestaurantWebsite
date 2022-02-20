import { Body, Controller, Delete, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiBody, ApiHeader, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { SessionDTO } from 'src/auth';
import { ParseObjectIdPipe } from 'src/util';
import { ACCESS_TOKEN } from 'src/util/constants';
import { AddItemDTO, CategoryQueryDTO, CreateCategoryDTO, EditCategoryDTO, MenuDTO } from './dto';
import { MenuService } from './menu.service';

@ApiTags('Menu Categories')
@ApiHeader({ name: ACCESS_TOKEN })
@Controller('menus/:menuId/categories')
export class CategoryController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  @ApiBody({ type: CreateCategoryDTO })
  @ApiOkResponse({ type: MenuDTO })
  async create(
    @Param('menuId', ParseObjectIdPipe) menuId: string,
    @Body() dto: CreateCategoryDTO,
  ): Promise<MenuDTO> {
    const menu = await this.menuService.addCategory(menuId, dto);
    return menu;
  }

  @Patch(':id')
  @ApiBody({ type: EditCategoryDTO })
  @ApiOkResponse({ type: MenuDTO })
  async edit(
    @Param('menuId', ParseObjectIdPipe) menuId: string,
    @Param('id', ParseObjectIdPipe) id: string,
    @Body() dto: EditCategoryDTO,
  ): Promise<MenuDTO> {
    const menu = await this.menuService.editCategory(menuId, id, dto);
    return menu;
  }

  @Delete(':id')
  @ApiOkResponse({ type: MenuDTO })
  async delete(
    @Param('menuId', ParseObjectIdPipe) menuId: string,
    @Param('id', ParseObjectIdPipe) id: string,
    @Query() query: CategoryQueryDTO,
    @Body('user') user: SessionDTO,
  ): Promise<MenuDTO> {
    const menu = await this.menuService.removeCategory(menuId, id, user.id, query.type);
    return menu;
  }

  /** add an item to category */
  @Post(':id/items')
  @ApiBody({ type: AddItemDTO })
  @ApiOkResponse({ type: MenuDTO })
  async addItem(
    @Param('menuId', ParseObjectIdPipe) menuId: string,
    @Param('id', ParseObjectIdPipe) id: string,
    @Query() query: CategoryQueryDTO,
    @Body() dto: AddItemDTO,
  ): Promise<MenuDTO> {
    console.log(menuId, id);
    const menu = await this.menuService.addItem(menuId, id, query.type, dto);
    return menu;
  }

  /** Remove an item from a category */
  @Delete(':catId/items/:id')
  @ApiOkResponse({ type: MenuDTO })
  async removeItem(
    @Param('menuId', ParseObjectIdPipe) menuId: string,
    @Param('catId', ParseObjectIdPipe) catId: string,
    @Param('id', ParseObjectIdPipe) id: string,
    @Query() query: CategoryQueryDTO,
    @Body('user') user: SessionDTO,
  ): Promise<MenuDTO> {
    const menu = await this.menuService.removeItem(menuId, catId, query.type, id, user.id);
    return menu;
  }

  //TODO:   editItem();
}
