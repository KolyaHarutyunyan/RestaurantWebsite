import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBody, ApiHeader, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ACCESS_TOKEN } from 'src/util/constants';
import { ParseObjectIdPipe } from '../util/pipes';
import { CreateItemDTO, EditItemDTO, ItemDTO } from './dto';
import { summaries } from './item.constants';
import { ItemService } from './item.service';
import { Public } from 'src/util/decorators';
import { SessionDTO } from 'src/auth';

@Controller('items')
@ApiTags('Items')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  /** Create an item */
  @Post()
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiBody({ type: CreateItemDTO })
  @ApiOkResponse({ type: ItemDTO })
  @ApiOperation({ summary: summaries.CREATE_ITEM })
  async createItem(@Body() createItemDTO: CreateItemDTO): Promise<ItemDTO> {
    const item = await this.itemService.create(createItemDTO);
    return item;
  }

  /** Get all items for the business */
  @Get('business/:businessId')
  @Public()
  @ApiOkResponse({ type: [ItemDTO] })
  @ApiOperation({ summary: summaries.GET_BUSINESS_ITEMS })
  async getAll(@Param('businessId', ParseObjectIdPipe) businessId: string): Promise<ItemDTO[]> {
    const categories = await this.itemService.getAll(businessId);
    return categories;
  }

  /** Get all categories for the business */
  @Get(':itemId')
  @Public()
  @ApiOkResponse({ type: ItemDTO })
  @ApiOperation({ summary: summaries.GET_BUSINESS_ITEMS })
  async get(@Param('itemId', ParseObjectIdPipe) itemId: string): Promise<ItemDTO> {
    const categories = await this.itemService.get(itemId);
    return categories;
  }

  /** Edit an item */
  @Patch(':itemId')
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
  @Delete(':id')
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOperation({ summary: summaries.DELETE_ITEM })
  async delete(
    @Param('id', ParseObjectIdPipe) id: string,
    @Body('user') user: SessionDTO,
  ): Promise<number> {
    const item = await this.itemService.delete(id, user);
    return item._id;
  }
}
