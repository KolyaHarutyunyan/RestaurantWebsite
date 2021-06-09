import {
  Body,
  Controller,
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
@ApiHeader({ name: ACCESS_TOKEN })
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  /** Create a menu for the business */
  @Post()
  @UseGuards(new AuthGuard([Role.OWNER]))
  @ApiBody({ type: CreateMenuDTO })
  @ApiOkResponse({ type: MenuDTO })
  async create(@Body() createMenuDTO: CreateMenuDTO): Promise<MenuDTO> {
    const createMenu = await this.menuService.create(createMenuDTO);
    return createMenu;
  }

  /** Update the menu fields */
  @Patch(':id')
  @UseGuards(new AuthGuard([Role.OWNER]))
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
  @ApiOkResponse({ type: String, description: 'Id of the activated menu' })
  @ApiOperation({ summary: summaries.ACTIVATE })
  async activateMenu(
    @Param('id', ParseObjectIdPipe) menuId: string,
    @Body('businessId', ParseObjectIdPipe) businessId: string,
    @Body('userId') ownerId: string,
  ): Promise<string> {
    const activeId = await this.menuService.toggleActive(
      menuId,
      ownerId,
      businessId,
    );
    return activeId;
  }
}
