import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiBody,
  ApiHeader,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Role, AuthGuard } from '../auth';
import { ACCESS_TOKEN } from '../constants';
import { OwnerInterceptor } from 'src/owner/interceptor';
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
  @UseInterceptors(FileInterceptor('menuImage'), OwnerInterceptor)
  @ApiBody({ type: CreateMenuDTO })
  @ApiOkResponse({ type: MenuDTO })
  async create(
    @UploadedFile() file,
    @Body() createMenuDTO: CreateMenuDTO,
  ): Promise<MenuDTO> {
    createMenuDTO.menuImage = file;
    const createMenu = await this.menuService.create(createMenuDTO);
    return createMenu;
  }

  /** Update the menu fields */
  @Patch(':id')
  @UseGuards(new AuthGuard([Role.OWNER]))
  @UseInterceptors(FileInterceptor('menuImage'), OwnerInterceptor)
  @ApiBody({ type: UpdateMenuDTO })
  @ApiOkResponse({ type: MenuDTO })
  async editMenu(
    @UploadedFile() file,
    @Param('id', ParseObjectIdPipe) menuId: string,
    @Body() updateMenuDTO: UpdateMenuDTO,
  ): Promise<MenuDTO> {
    console.log(updateMenuDTO);
    updateMenuDTO.menuImage = file;
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
  @Patch(':id/activate')
  @UseGuards(new AuthGuard([Role.OWNER]))
  @ApiOkResponse({ type: String, description: 'Id of the activated menu' })
  @ApiOperation({ summary: summaries.ACTIVATE })
  async activateMenu(
    @Param('id', ParseObjectIdPipe) menuId: string,
  ): Promise<string> {
    const activatedMenuId = await this.menuService.activate(menuId);
    return activatedMenuId;
  }
}
