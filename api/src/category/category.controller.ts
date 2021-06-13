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
import { ACCESS_TOKEN } from '../constants';
import { AuthGuard, Role } from '../auth';
import { CategoryService } from './category.service';
import { CategoryRO, CreateCategoryDTO, EditCategoryDTO } from './dto';
import { ParseObjectIdPipe } from 'src/util/pipes';
import { summaries } from './category.constants';

@Controller('categories')
@ApiTags('Categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  /** Create a new Category */
  @Post()
  @UseGuards(new AuthGuard([Role.OWNER]))
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiBody({ type: CreateCategoryDTO })
  @ApiOkResponse({ type: CategoryRO })
  async create(
    @Body() createCategoryDTO: CreateCategoryDTO,
  ): Promise<CategoryRO> {
    const category = await this.categoryService.create(createCategoryDTO);
    return category;
  }

  /** Create a new Category */
  @Patch(':id')
  @UseGuards(new AuthGuard([Role.OWNER]))
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiBody({ type: EditCategoryDTO })
  @ApiOkResponse({ type: CategoryRO })
  async edit(
    @Param('id', ParseObjectIdPipe) catId: string,
    @Body() editDTO: EditCategoryDTO,
  ): Promise<CategoryRO> {
    const category = await this.categoryService.edit(catId, editDTO);
    return category;
  }

  /** remove an item to the category */
  @Patch(':categoryId/removeItem/:itemId')
  @UseGuards(new AuthGuard([Role.OWNER]))
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOkResponse({ type: CategoryRO })
  async removeItem(
    @Param('categoryId', ParseObjectIdPipe) catId: string,
    @Param('itemId', ParseObjectIdPipe) itemId: string,
    @Body('userId') ownerId: string,
  ): Promise<CategoryRO> {
    const category = await this.categoryService.removeItem(
      catId,
      itemId,
      ownerId,
    );
    return category;
  }

  /** Add an item to the category */
  @Patch(':categoryId/addItem/:itemId')
  @UseGuards(new AuthGuard([Role.OWNER]))
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOkResponse({ type: CategoryRO })
  async addItem(
    @Param('categoryId', ParseObjectIdPipe) catId: string,
    @Param('itemId', ParseObjectIdPipe) itemId: string,
    @Body('userId') ownerId: string,
  ): Promise<CategoryRO> {
    const category = await this.categoryService.addItem(catId, itemId, ownerId);
    return category;
  }

  /** remove an item from all categories */
  @Delete('/items/:itemId')
  @UseGuards(new AuthGuard([Role.OWNER]))
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOperation({ summary: summaries.DELETE_ITEM })
  @ApiOkResponse({ type: String })
  async deleteItem(
    @Param('itemId', ParseObjectIdPipe) itemId: string,
    @Body('userId') ownerId: string,
  ): Promise<string> {
    const deletedId = await this.categoryService.deleteItem(itemId, ownerId);
    return deletedId;
  }

  /** Get the category with its items */
  @Get(':id')
  @ApiOkResponse({ type: CategoryRO })
  async getById(
    @Param('id', ParseObjectIdPipe) id: string,
  ): Promise<CategoryRO> {
    const category = await this.categoryService.getById(id);
    return category;
  }

  /** Delete a category from this collection  -- THIS FUNTIONALITY IS GIVEN BY THE MENU MODULE*/
  //   @Delete(':categoryId')
  //   @UseGuards(new AuthGuard([Role.OWNER]))
  //   @ApiHeader({ name: ACCESS_TOKEN })
  //   async deleteCategory(
  //     @Param('categoryId', ParseObjectIdPipe) categoryId: string,
  //     @Body('userId') ownerId: string,
  //   ): Promise<string> {
  //     const deletedId = await this.categoryService.delete(categoryId, ownerId);
  //     return deletedId;
  //   }
}
