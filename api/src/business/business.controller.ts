import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiBody, ApiHeader, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { SessionDTO } from '../auth';
import { ACCESS_TOKEN } from '../util/constants';
import { ParseObjectIdPipe } from 'src/util/pipes';
import { BusinessService } from './business.service';
import { CreateBusinessDTO } from './dto';
import { BusinessDTO } from './dto/business.dto';
import { EditBusinessDTO } from './dto/edit.dto';
import { Public } from 'src/util/decorators';
import { BusinessStatus } from './business.constants';

@Controller('businesses')
@ApiTags('Businesses')
export class BusinessController {
  constructor(private readonly businessService: BusinessService) {}

  /** Create a new business */
  @Post()
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiBody({ type: CreateBusinessDTO })
  @ApiOkResponse({ type: BusinessDTO })
  async create(@Body() dto: CreateBusinessDTO): Promise<BusinessDTO> {
    const business = await this.businessService.create(dto);
    return business;
  }

  /** Edit business */
  @Patch(':id')
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiBody({ type: EditBusinessDTO })
  @ApiOkResponse({ type: BusinessDTO })
  async edit(@Param('id', ParseObjectIdPipe) id: string, @Body() editBusinessDTO: EditBusinessDTO) {
    const business = await this.businessService.edit(id, editBusinessDTO);
    return business;
  }

  /** Get users business */
  @Get('mybusiness')
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOkResponse({ type: BusinessDTO })
  async getMyBusiness(@Body('user') owner: SessionDTO): Promise<BusinessDTO> {
    const business = (await this.businessService.getByOwnerID(owner.id))[0];
    return business;
  }

  @Get('owner')
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOkResponse({ type: [BusinessDTO] })
  async getByOwnerId(@Body('user') owner: SessionDTO): Promise<BusinessDTO[]> {
    return await this.businessService.getByOwnerID(owner.id);
  }

  @Get(':id')
  @Public()
  @ApiOkResponse({ type: BusinessDTO })
  async getById(@Param('id') id: string): Promise<BusinessDTO> {
    const business = await this.businessService.get(id);
    return business;
  }

  /** Change the status of a business */
  @Patch(':id')
  async setStatus(
    @Param('id', ParseObjectIdPipe) id: string,
    @Query('status') queryStatus: BusinessStatus,
    @Body('user')
    user: SessionDTO,
  ): Promise<BusinessStatus> {
    const status = await this.businessService.setStatus(id, queryStatus, user);
    return status;
  }
}
/** END OF CONTROLLER */
