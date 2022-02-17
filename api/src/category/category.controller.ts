import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBody, ApiHeader, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ACCESS_TOKEN } from '../util/constants';
import { CategoryService } from './category.service';
import { CategoryDTO, CreateCategoryDTO, EditCategoryDTO, ReorderDTO } from './dto';
import { ParseObjectIdPipe } from 'src/util/pipes';
import { summaries } from './category.constants';
import { CategoryItemsDTO } from './dto/categoryItems.dto';
import { Public } from 'src/util/decorators';
import { SessionDTO } from 'src/auth';

@Controller('categories')
@ApiTags('Categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  /** Create a new Category */
  @Post()
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiBody({ type: CreateCategoryDTO })
  @ApiOkResponse({ type: CategoryDTO })
  @ApiOperation({ summary: summaries.CREATE_CATEGORY })
  async create(@Body() createCategoryDTO: CreateCategoryDTO): Promise<CategoryDTO> {
    const category = await this.categoryService.create(createCategoryDTO);
    return category;
  }

  /** Edit a Category */
  @Patch(':id')
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiBody({ type: EditCategoryDTO })
  @ApiOkResponse({ type: CategoryDTO })
  @ApiOperation({ summary: summaries.EDIT_CATEGORY })
  async edit(
    @Param('id', ParseObjectIdPipe) catId: string,
    @Body() editDTO: EditCategoryDTO,
  ): Promise<CategoryDTO> {
    const category = await this.categoryService.edit(catId, editDTO);
    return category;
  }

  /** Get all categories for the business */
  @Get('business/:businessId')
  @ApiOkResponse({ type: [CategoryDTO] })
  @ApiOperation({ summary: summaries.GET_BUSINESS_CATEGORY })
  async getAll(@Param('businessId', ParseObjectIdPipe) businessId: string): Promise<CategoryDTO[]> {
    const categories = await this.categoryService.getAll(businessId);
    return categories;
  }

  /** Get the category without its items */
  @Get(':id')
  @Public()
  @ApiOkResponse({ type: CategoryDTO })
  @ApiOperation({ summary: summaries.GET_CATEGORY })
  async getById(@Param('id', ParseObjectIdPipe) id: string): Promise<CategoryDTO> {
    const category = await this.categoryService.getById(id);
    return category;
  }

  /** remove an item to the category */
  @Patch(':categoryId/removeItem/:itemId')
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOkResponse({ type: CategoryItemsDTO })
  @ApiOperation({ summary: summaries.REMOVE_ITEM })
  async removeItem(
    @Param('categoryId', ParseObjectIdPipe) catId: string,
    @Param('itemId', ParseObjectIdPipe) itemId: string,
    @Body('user') user: SessionDTO,
  ): Promise<CategoryItemsDTO> {
    const category = await this.categoryService.removeItem(catId, itemId, user);
    return category;
  }

  /** Add an item to the category */
  @Patch(':categoryId/addItem/:itemId')
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOkResponse({ type: CategoryItemsDTO })
  @ApiOperation({ summary: summaries.ADD_ITEM })
  async addItem(
    @Param('categoryId', ParseObjectIdPipe) catId: string,
    @Param('itemId', ParseObjectIdPipe) itemId: string,
    @Body('user') user: SessionDTO,
  ): Promise<CategoryItemsDTO> {
    const category = await this.categoryService.addItem(catId, itemId, user);
    return category;
  }

  /** Change the order of the categories in the menu */
  @Patch(':categoryId/reorder')
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOperation({ summary: summaries.REORDER_ITEMS })
  @ApiOkResponse({ type: CategoryItemsDTO })
  async reorderCategories(
    @Param('categoryId', ParseObjectIdPipe) categoryId: string,
    @Body() reorderDTO: ReorderDTO,
    @Body('user') user: SessionDTO,
  ): Promise<CategoryItemsDTO> {
    const menu = await this.categoryService.reorderItems(categoryId, user, reorderDTO);
    return menu;
  }

  /** Get Category items */
  @Get(':categoryId/items')
  @Public()
  @ApiOperation({ summary: summaries.GET_ITEMS })
  @ApiOkResponse({ type: CategoryItemsDTO })
  async getItems(
    @Param('categoryId', ParseObjectIdPipe) categoryId: string,
  ): Promise<CategoryItemsDTO> {
    const categoryItems = await this.categoryService.getItems(categoryId);
    return categoryItems;
  }
}
