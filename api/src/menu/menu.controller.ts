import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiHeader,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { ACCESS_TOKEN } from '../util/constants';
import { CreateMenuDTO, MenuDTO, EditMenuDTO } from './dto';
import { MenuService } from './menu.service';
import { ParseObjectIdPipe } from 'src/util/pipes';
import { summaries } from './menu.constants';
import { SessionDTO } from 'src/auth';
import { Public } from 'src/util';

@Controller('menus')
@ApiTags('Menus')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  /** Create a menu for the business */
  @Post()
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiBody({ type: CreateMenuDTO })
  @ApiOkResponse({ type: MenuDTO })
  async create(@Body() dto: CreateMenuDTO): Promise<MenuDTO> {
    const createMenu = await this.menuService.create(dto);
    return createMenu;
  }

  /** Update the menu fields */
  @Patch(':id')
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiBody({ type: EditMenuDTO })
  @ApiOkResponse({ type: MenuDTO })
  async editMenu(
    @Param('id', ParseObjectIdPipe) menuId: string,
    @Body() dto: EditMenuDTO,
  ): Promise<MenuDTO> {
    const menu = await this.menuService.edit(menuId, dto);
    return menu;
  }

  /** Get the menus for the business */
  @Get('bybusiness/:id')
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOkResponse({ type: [MenuDTO] })
  async getBusinessMenus(
    @Param('id', ParseObjectIdPipe) businessId: string,
    @Body('user') user: SessionDTO,
  ): Promise<MenuDTO[]> {
    const menus = await this.menuService.getByBusinessId(businessId, user);
    return menus;
  }

  /** Get the active menu with its categories */
  @Get('active/:id')
  @Public()
  @ApiParam({ name: 'id' })
  @ApiOkResponse({ type: MenuDTO })
  @ApiOperation({ summary: summaries.GET_ACTIVE })
  async getActiveMenu(@Param('id', ParseObjectIdPipe) id): Promise<MenuDTO> {
    const menu = await this.menuService.getActive(id);
    return menu;
  }

  /** Get Menu with Menu Id */
  @Get(':id')
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOkResponse({ type: MenuDTO })
  async getMenu(@Param('id', ParseObjectIdPipe) menuId: string): Promise<MenuDTO> {
    const menu = await this.menuService.getOne(menuId);
    return menu;
  }

  /** Set menu active */
  @Patch(':id/toggle')
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOkResponse({ type: MenuDTO, description: 'Id of the activated menu' })
  @ApiOperation({ summary: summaries.ACTIVATE })
  async toggleMenu(
    @Param('id', ParseObjectIdPipe) menuId: string,
    @Body('user') user: SessionDTO,
  ): Promise<MenuDTO> {
    const activeId = await this.menuService.toggle(menuId, user);
    return activeId;
  }

  /** Delete a menu */
  @Delete(':menuId')
  @ApiOperation({ summary: summaries.DELETE_MENU })
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOkResponse({ type: String, description: 'Id of the deleted menu' })
  async deleteMenu(
    @Param('menuId', ParseObjectIdPipe) menuId: string,
    @Body('user') user: string,
  ): Promise<string> {
    const deletedId = await this.menuService.delete(menuId, user);
    return deletedId;
  }
}
