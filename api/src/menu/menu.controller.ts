import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBody,
  ApiHeader,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Role, AuthGuard } from '../auth';
import { ACCESS_TOKEN } from '../constants';
import { CreateMenuDTO, MenuDTO, UpdateMenuDTO } from './dto';
import { MenuService } from './menu.service';
import { ParseObjectIdPipe } from 'src/util/pipes';
import { summaries } from './menu.constants';

@Controller('menus')
@ApiTags('Menus')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  /** Create a menu for the business */
  @Post()
  @UseGuards(new AuthGuard([Role.OWNER]))
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiBody({ type: CreateMenuDTO })
  @ApiOkResponse({ type: MenuDTO })
  async create(@Body() createMenuDTO: CreateMenuDTO): Promise<MenuDTO> {
    const createMenu = await this.menuService.create(createMenuDTO);
    return createMenu;
  }

  /** Update the menu fields */
  @Patch(':id')
  @UseGuards(new AuthGuard([Role.OWNER]))
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiBody({ type: UpdateMenuDTO })
  @ApiOkResponse({ type: MenuDTO })
  async editMenu(
    @Param('id', ParseObjectIdPipe) menuId: string,
    @Body() updateMenuDTO: UpdateMenuDTO,
  ): Promise<MenuDTO> {
    const menu = await this.menuService.edit(menuId, updateMenuDTO);
    return menu;
  }

  /** Get the menus for the business */
  @Get('bybusiness/:id')
  @UseGuards(new AuthGuard([Role.OWNER]))
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOkResponse({ type: [MenuDTO] })
  async getBusinessMenus(
    @Param('id', ParseObjectIdPipe) businessId: string,
    @Body('userId') ownerId: string,
  ): Promise<MenuDTO[]> {
    const menus = await this.menuService.getByBusinessId(businessId, ownerId);
    return menus;
  }

  /** Get Menu with Menu Id */
  @Get(':id')
  @UseGuards(new AuthGuard([Role.OWNER]))
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOkResponse({ type: [MenuDTO] })
  async getMenu(
    @Param('id', ParseObjectIdPipe) menuId: string,
  ): Promise<MenuDTO> {
    const menu = await this.menuService.getById(menuId);
    return menu;
  }

  /** Set menu active */
  @Patch(':id/toggle')
  @UseGuards(new AuthGuard([Role.OWNER]))
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOkResponse({ type: String, description: 'Id of the activated menu' })
  @ApiOperation({ summary: summaries.ACTIVATE })
  async activateMenu(
    @Param('id', ParseObjectIdPipe) menuId: string,
    @Body('userId') ownerId: string,
  ): Promise<string> {
    const activeId = await this.menuService.toggleActive(menuId, ownerId);
    return activeId;
  }

  /** remove a category from a menu */
  @Patch(':menuId/removeCategory/:categoryId')
  @UseGuards(new AuthGuard([Role.OWNER]))
  @ApiOperation({ summary: summaries.REMOVE_CATEGORY })
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOkResponse({ type: MenuDTO })
  async removeCategory(
    @Param('menuId', ParseObjectIdPipe) menuId: string,
    @Param('categoryId', ParseObjectIdPipe) categoryId: string,
    @Body('userId') ownerId: string,
  ): Promise<MenuDTO> {
    const menu = await this.menuService.removeCategory(
      menuId,
      categoryId,
      ownerId,
    );
    return menu;
  }

  /** Add a category to the menu */
  @Patch(':menuId/addCategory/:categoryId')
  @UseGuards(new AuthGuard([Role.OWNER]))
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOperation({ summary: summaries.ADD_CATEGORY })
  @ApiOkResponse({ type: MenuDTO })
  async addCategory(
    @Param('menuId', ParseObjectIdPipe) menuId: string,
    @Param('categoryId', ParseObjectIdPipe) categoryId: string,
    @Body('userId') ownerId: string,
  ): Promise<MenuDTO> {
    const category = await this.menuService.addCategory(
      menuId,
      categoryId,
      ownerId,
    );
    return category;
  }

  /** remove a category from all menus */
  @Delete('/categories/:categoryId')
  @UseGuards(new AuthGuard([Role.OWNER]))
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOperation({ summary: summaries.DELETE_CATEGORY })
  @ApiOkResponse({ type: String })
  async deleteCategory(
    @Param('categoryId', ParseObjectIdPipe) categoryId: string,
    @Body('userId') ownerId: string,
  ): Promise<string> {
    const category = await this.menuService.deleteCategory(categoryId, ownerId);
    return category;
  }

  /** Delete a menu */
  @Delete(':menuId')
  @UseGuards(new AuthGuard([Role.OWNER]))
  @ApiOperation({ summary: summaries.DELETE_MENU })
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOkResponse({ type: String, description: 'Id of the deleted menu' })
  async deleteMenu(
    @Param('menuId', ParseObjectIdPipe) menuId: string,
    @Body('userId') ownerId: string,
  ): Promise<string> {
    const deletedId = await this.menuService.delete(menuId, ownerId);
    return deletedId;
  }
}
