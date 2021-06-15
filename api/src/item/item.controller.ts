import {
  Body,
  Controller,
  Delete,
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
import { ACCESS_TOKEN } from 'src/constants';
import { ParseObjectIdPipe } from '../util/pipes';
import { AuthGuard, Role } from '../auth';
import { CreateItemDTO, EditItemDTO, ItemDTO } from './dto';
import { summaries } from './item.constants';
import { ItemService } from './item.service';

@Controller('items')
@ApiTags('Items')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  /** Create an item */
  @Post()
  @UseGuards(new AuthGuard([Role.OWNER]))
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiBody({ type: CreateItemDTO })
  @ApiOkResponse({ type: ItemDTO })
  @ApiOperation({ summary: summaries.CREATE_ITEM })
  async createItem(@Body() createItemDTO: CreateItemDTO): Promise<ItemDTO> {
    const item = await this.itemService.create(createItemDTO);
    return item;
  }

  /** Edit an item */
  @Patch(':itemId')
  @UseGuards(new AuthGuard([Role.OWNER]))
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOperation({ summary: summaries.EDIT_ITEM })
  @ApiBody({ type: EditItemDTO })
  @ApiOkResponse({ type: ItemDTO })
  async editItem(
    @Param('itemId', ParseObjectIdPipe) itemId: string,
    @Body() editDTO: EditItemDTO,
  ): Promise<ItemDTO> {
    const item = await this.itemService.edit(itemId, editDTO);
    return item;
  }

  /** Delete an item  - This functionality is provided by the Category Module*/
}
