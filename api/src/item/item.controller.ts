import {
  Body,
  Controller,
  Delete,
  Param,
  Patch,
  Post,
  UploadedFile,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import {
  ApiHeader,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ACCESS_TOKEN } from 'src/constants';
import { OwnerInterceptor } from 'src/owner/interceptor';
import { ParseObjectIdPipe } from 'src/util/pipes';
import { AuthGuard, Role } from '../auth';
import { CreateItemDTO, EditItemDTO, ItemDTO } from './dto';
import { ItemImageService } from './item-image.service';
import { summaries } from './item.constants';
import { ItemService } from './item.service';

@Controller('items')
@ApiTags('Items')
export class ItemController {
  constructor(
    private readonly itemService: ItemService,
    private readonly itemImgService: ItemImageService,
  ) {}

  /** Create an item */
  @Post()
  @UseGuards(new AuthGuard([Role.OWNER]))
  @UseInterceptors(FilesInterceptor('images', 6), OwnerInterceptor)
  @ApiOkResponse({ type: ItemDTO })
  async createItem(
    @UploadedFiles() images,
    @Body() createItemDTO: CreateItemDTO,
  ): Promise<ItemDTO> {
    createItemDTO.images = images.images;
    const item = await this.itemService.create(createItemDTO);
    return item;
  }

  /** Edit an item */
  @Patch(':itemId')
  @UseGuards(new AuthGuard([Role.OWNER]))
  @ApiOkResponse({ type: ItemDTO })
  async editItem(
    @Param('itemId', ParseObjectIdPipe) itemId: string,
    @Body() editDTO: EditItemDTO,
  ): Promise<ItemDTO> {
    const item = await this.itemService.edit(itemId, editDTO);
    return item;
  }

  /*** Image manipulation controller functions */

  /** Add an image to the item */
  @Post(':itemId/images')
  @UseGuards(new AuthGuard([Role.OWNER]))
  @ApiOperation({ summary: summaries.ADD_IMAGE })
  @ApiHeader({ name: ACCESS_TOKEN })
  @UseInterceptors(FileInterceptor('image'), OwnerInterceptor)
  async addImageToItem(
    @Param('itemId', ParseObjectIdPipe) itemId: string,
    @Body('userId') ownerId: string,
    @UploadedFile() file,
  ): Promise<ItemDTO> {
    const item = await this.itemImgService.addImage(itemId, ownerId, file);
    return item;
  }

  /** change main image */
  @Patch(':itemId/images/:imageId')
  @UseGuards(new AuthGuard([Role.OWNER]))
  @ApiOperation({ summary: summaries.CHANGE_MAIN })
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOkResponse({ type: ItemDTO })
  async changeMainImage(
    @Param('itemId', ParseObjectIdPipe) itemId: string,
    @Param('imageId', ParseObjectIdPipe) imageId: string,
    @Body('userId') ownerId: string,
  ): Promise<ItemDTO> {
    const item = await this.itemImgService.changeMainImage(
      itemId,
      imageId,
      ownerId,
    );
    return item;
  }

  /** Delete an image from an item */
  @Delete(':itemId/images/:imageId')
  @UseGuards(new AuthGuard([Role.OWNER]))
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOkResponse({ type: ItemDTO })
  async deleteItemImage(
    @Param('itemId', ParseObjectIdPipe) itemId: string,
    @Param('imageId', ParseObjectIdPipe) imageId: string,
    @Body('userId') ownerId: string,
  ): Promise<ItemDTO> {
    const item = await this.itemImgService.deleteImage(
      itemId,
      imageId,
      ownerId,
    );
    return item;
  }
}
