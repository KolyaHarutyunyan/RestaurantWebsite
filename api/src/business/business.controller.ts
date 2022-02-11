import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiHeader, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Role, AuthGuard } from '../auth';
import { ACCESS_TOKEN } from '../constants';
import { ParseObjectIdPipe } from 'src/util/pipes';
import { BusinessService } from './business.service';
import { CreateBusinessDTO } from './dto';
import { BusinessDTO } from './dto/business.dto';
import { EditBusinessDTO } from './dto/editBusiness.dto';
import { Public } from 'src/util/decorators';

@Controller('businesses')
@ApiTags('Businesses')
@ApiHeader({ name: ACCESS_TOKEN })
export class BusinessController {
  constructor(private readonly businessService: BusinessService) {}

  /** Create a new business */
  @Post()
  @UseGuards(new AuthGuard([Role.OWNER]))
  @ApiBody({ type: CreateBusinessDTO })
  @ApiOkResponse({ type: BusinessDTO })
  async createbusiness(@Body() dto: CreateBusinessDTO): Promise<BusinessDTO> {
    console.log(dto);
    const business = await this.businessService.create(dto);
    return business;
  }

  /** Edit business */
  @Patch(':id')
  @UseGuards(new AuthGuard([Role.OWNER]))
  @ApiBody({ type: EditBusinessDTO })
  @ApiOkResponse({ type: BusinessDTO })
  async editBusiness(
    @Param('id', ParseObjectIdPipe) id: string,
    @Body() editBusinessDTO: EditBusinessDTO,
  ) {
    const business = await this.businessService.edit(id, editBusinessDTO);
    return business;
  }

  /** Get users business */
  @Get('mybusiness')
  @UseGuards(new AuthGuard([Role.OWNER]))
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOkResponse({ type: BusinessDTO })
  async getMyBusiness(@Body('userId') ownerId: string): Promise<BusinessDTO> {
    const business = (await this.businessService.getByOwnerID(ownerId))[0];
    return business;
  }

  @Get('owner')
  @UseGuards(new AuthGuard([Role.OWNER]))
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOkResponse({ type: [BusinessDTO] })
  async getByOwnerId(@Body('userId') ownerId: string): Promise<BusinessDTO[]> {
    return await this.businessService.getByOwnerID(ownerId);
  }

  @Get(':id')
  @Public()
  @ApiOkResponse({ type: BusinessDTO })
  async getById(@Param('id') id: string): Promise<BusinessDTO> {
    const business =  await this.businessService.get(id);
    return business;
  }
}
/** END OF CONTROLLER */


