import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBody,
  ApiHeader,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { Role, AuthGuard } from '../auth';
import { ACCESS_TOKEN } from '../constants';
import {
  CreateMenuDTO,
  MenuCategoriesDTO,
  MenuDTO,
  ReorderDTO,
  UpdateMenuDTO,
} from './dto';
import { MenuService } from './menu.service';
import { ParseObjectIdPipe } from 'src/util/pipes';
import { summaries } from './menu.constants';
import { CategoryType } from 'src/category';
import { CategoryQueryDTO } from './dto/categoryQuery.dto';
import { FullMenuDTO } from './dto/fullMenu.dto';

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

  /** Get the active menu with its categories */
  @Get('active/:businessId')
  @ApiOkResponse({ type: MenuDTO })
  @ApiOperation({ summary: summaries.GET_ACTIVE })
  async getActiveMenu(
    @Param('businessId', ParseObjectIdPipe) businessId,
  ): Promise<FullMenuDTO> {
    const menu = await this.menuService.getActive(businessId);
    return menu;
  }

  /** Get the full menu with a given id */
  @Get(':menuId/full')
  @ApiOkResponse({ type: MenuDTO })
  @ApiOperation({ summary: summaries.GET_FULL })
  async getFullMenu(
    @Param('menuId', ParseObjectIdPipe) menuId,
  ): Promise<FullMenuDTO> {
    const menu = await this.menuService.getFullMenu(menuId);
    return menu;
  }

  /** Get Menu with Menu Id */
  @Get(':id')
  @UseGuards(new AuthGuard([Role.OWNER]))
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOkResponse({ type: MenuDTO })
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

  /** Get the categories of the menu */
  @Get(':menuId/categories')
  @ApiOperation({ summary: summaries.GET_CATEGORIES })
  @ApiOkResponse({ type: MenuCategoriesDTO })
  async getMenuCategories(
    @Param('menuId', ParseObjectIdPipe) menuId: string,
  ): Promise<MenuCategoriesDTO> {
    const categories = await this.menuService.getCategories(menuId);
    return categories;
  }

  /** remove a category from a menu */
  @Patch(':menuId/removeCategory/:categoryId')
  @UseGuards(new AuthGuard([Role.OWNER]))
  @ApiOperation({ summary: summaries.REMOVE_CATEGORY })
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOkResponse({ type: MenuCategoriesDTO })
  @ApiQuery({ enum: CategoryType, name: 'type' })
  async removeCategory(
    @Param('menuId', ParseObjectIdPipe) menuId: string,
    @Param('categoryId', ParseObjectIdPipe) categoryId: string,
    @Query() query: CategoryQueryDTO,
    @Body('userId')
    ownerId: string,
  ): Promise<MenuCategoriesDTO> {
    const menu = await this.menuService.removeCategory(
      menuId,
      categoryId,
      ownerId,
      query.type,
    );
    return menu;
  }

  /** Add a category to the menu */
  @Patch(':menuId/addCategory/:categoryId')
  @UseGuards(new AuthGuard([Role.OWNER]))
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOperation({ summary: summaries.ADD_CATEGORY })
  @ApiOkResponse({ type: MenuCategoriesDTO })
  @ApiQuery({ enum: CategoryType, name: 'type' })
  async addCategory(
    @Param('menuId', ParseObjectIdPipe) menuId: string,
    @Param('categoryId', ParseObjectIdPipe) categoryId: string,
    @Query() query: CategoryQueryDTO,
    @Body('userId') ownerId: string,
  ): Promise<MenuCategoriesDTO> {
    const category = await this.menuService.addCategory(
      menuId,
      categoryId,
      ownerId,
      query.type,
    );
    return category;
  }

  /** Change the order of the categories in the menu */
  @Patch(':menuId/categories/reorder')
  @UseGuards(new AuthGuard([Role.OWNER]))
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOperation({ summary: summaries.REORDER_CATEGORIES })
  @ApiOkResponse({ type: MenuCategoriesDTO })
  @ApiQuery({ enum: CategoryType, name: 'type' })
  async reorderCategories(
    @Param('menuId', ParseObjectIdPipe) menuId: string,
    @Body() reorderDTO: ReorderDTO,
    @Query() query: CategoryQueryDTO,
    @Body('userId') ownerId: string,
  ): Promise<MenuCategoriesDTO> {
    const menu = await this.menuService.reorderCategories(
      menuId,
      ownerId,
      reorderDTO,
      query.type,
    );
    return menu;
  }

  /** remove a category from all menus */
  @Delete('categories/:categoryId')
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
}
