import {
  Body,
  Controller,
  Param,
  Patch,
  Post,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import {
  FileFieldsInterceptor,
  FileInterceptor,
} from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { OwnerInterceptor } from 'src/owner/interceptor';
import { ParseObjectIdPipe } from 'src/util/pipes';
import { AuthGuard, Role } from '../auth';
import { CreateItemDTO, EditItemDTO, ItemDTO } from './dto';
import { ItemService } from './item.service';

@Controller('items')
@ApiTags('Items')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  /** Create an item */
  @Post()
  @UseGuards(new AuthGuard([Role.OWNER]))
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'mainImage', maxCount: 1 },
      { name: 'images', maxCount: 5 },
    ]),
    OwnerInterceptor,
  )
  async createItem(
    @UploadedFiles() images,
    @Body() createItemDTO: CreateItemDTO,
  ): Promise<ItemDTO> {
    createItemDTO.mainImage = images.mainImage[0];
    createItemDTO.images = images.images;
    const item = await this.itemService.create(createItemDTO);
    return item;
  }

  /** Edit an item */
  @Patch(':itemId')
  @UseGuards(new AuthGuard([Role.OWNER]))
  async editItem(
    @Param('itemId', ParseObjectIdPipe) itemId: string,
    @Body() editDTO: EditItemDTO,
  ): Promise<ItemDTO> {
    const item = await this.itemService.edit(itemId, editDTO);
    return item;
  }
}
