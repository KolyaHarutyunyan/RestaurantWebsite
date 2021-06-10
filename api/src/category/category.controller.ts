import {
  Body,
  Controller,
  Delete,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBody, ApiHeader, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ACCESS_TOKEN } from '../constants';
import { AuthGuard, Role } from '../auth';
import { CategoryService } from './category.service';
import { CategoryDTO, CreateCategoryDTO, EditCategoryDTO } from './dto';
import { ParseObjectIdPipe } from 'src/util/pipes';

@Controller('categories')
@ApiTags('Categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  /** Create a new Category */
  @Post()
  @UseGuards(new AuthGuard([Role.OWNER]))
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiBody({ type: CreateCategoryDTO })
  @ApiOkResponse({ type: CategoryDTO })
  async create(
    @Body() createCategoryDTO: CreateCategoryDTO,
  ): Promise<CategoryDTO> {
    const category = await this.categoryService.create(createCategoryDTO);
    return category;
  }

  /** Create a new Category */
  @Patch(':id')
  @UseGuards(new AuthGuard([Role.OWNER]))
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiBody({ type: EditCategoryDTO })
  @ApiOkResponse({ type: CategoryDTO })
  async edit(
    @Param('id', ParseObjectIdPipe) catId: string,
    @Body() editDTO: EditCategoryDTO,
  ): Promise<CategoryDTO> {
    const category = await this.categoryService.edit(catId, editDTO);
    return category;
  }

  /** remove an item to the category */
  @Patch(':categoryId/removeItem/:itemId')
  @UseGuards(new AuthGuard([Role.OWNER]))
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOkResponse({ type: CategoryDTO })
  async removeItem(
    @Param('categoryId', ParseObjectIdPipe) catId: string,
    @Param('itemId', ParseObjectIdPipe) itemId: string,
    @Body('userId') ownerId: string,
  ): Promise<CategoryDTO> {
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
  @ApiOkResponse({ type: CategoryDTO })
  async addItem(
    @Param('categoryId', ParseObjectIdPipe) catId: string,
    @Param('itemId', ParseObjectIdPipe) itemId: string,
    @Body('userId') ownerId: string,
  ): Promise<CategoryDTO> {
    const category = await this.categoryService.addItem(catId, itemId, ownerId);
    return category;
  }

  /** Delete a category from this collection */
  @Delete(':categoryId')
  @UseGuards(new AuthGuard([Role.OWNER]))
  @ApiHeader({ name: ACCESS_TOKEN })
  async deleteCategory(
    @Param('categoryId', ParseObjectIdPipe) categoryId: string,
    @Body('userId') ownerId: string,
  ): Promise<string> {
    const deletedId = await this.categoryService.delete(categoryId, ownerId);
    return deletedId;
  }
}
