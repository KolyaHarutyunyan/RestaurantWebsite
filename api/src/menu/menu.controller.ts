import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiHeader, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Role, AuthGuard } from '../auth';
import { ACCESS_TOKEN } from '../constants';
import { OwnerInterceptor } from 'src/owner/interceptor';
import { CreateMenuDTO, MenuDTO } from './dto';
import { MenuService } from './menu.service';

@Controller('menus')
@ApiTags('Menus')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  @UseGuards(new AuthGuard([Role.OWNER]))
  @UseInterceptors(OwnerInterceptor)
  @UseInterceptors(FileInterceptor('menuImage'))
  @ApiHeader({ name: ACCESS_TOKEN })
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
}
