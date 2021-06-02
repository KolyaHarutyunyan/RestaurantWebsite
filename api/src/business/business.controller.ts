import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiHeader, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Role, AuthGuard } from '../auth';
import { ACCESS_TOKEN } from '../constants';
import { OwnerInterceptor } from '../owner/interceptor';
import { ParseObjectIdPipe } from 'src/util/pipes';
import { ImageService } from '../image';
import { BusinessService } from './business.service';
import { CreateBusinessDTO } from './dto';
import { BusinessDTO } from './dto/business.dto';
import { EditBusinessDTO } from './dto/editBusiness.dto';

@Controller('businesses')
@ApiTags('Businesses')
@ApiHeader({ name: ACCESS_TOKEN })
export class BusinessController {
  constructor(
    private readonly businessService: BusinessService,
    private readonly imageService: ImageService,
  ) {}

  /** Create a new business */
  @Post()
  @UseGuards(new AuthGuard([Role.OWNER]))
  @UseInterceptors(OwnerInterceptor)
  @UseInterceptors(FileInterceptor('logo'))
  @ApiBody({ type: CreateBusinessDTO })
  @ApiOkResponse({ type: BusinessDTO })
  async createbusiness(
    @UploadedFile() file,
    @Body() businessInfo: CreateBusinessDTO,
  ): Promise<any> {
    businessInfo.logo = file;
    const business = await this.businessService.create(businessInfo);
    return business;
  }

  /** Edit business */
  @Patch(':id')
  @UseGuards(new AuthGuard([Role.OWNER]))
  @UseInterceptors(OwnerInterceptor)
  @UseInterceptors(FileInterceptor('logo'))
  @ApiBody({ type: EditBusinessDTO })
  @ApiOkResponse({ type: BusinessDTO })
  async editBusiness(
    @UploadedFile() file,
    @Param('id', ParseObjectIdPipe) id: string,
    @Body() editBusinessDTO: EditBusinessDTO,
  ) {
    editBusinessDTO.logo = file;
    const business = await this.businessService.edit(id, editBusinessDTO);
    return business;
  }

  /** Get users business */
  @Get('mybusiness')
  @UseGuards(new AuthGuard([Role.OWNER]))
  @ApiHeader({ name: ACCESS_TOKEN })
  async getMyBusiness(@Body('userId') ownerId: string): Promise<BusinessDTO> {
    return await this.businessService.getByOwnerID(ownerId)[0];
  }

  @Get('owner/:id')
  async getByOwnerId(@Param('id', ParseObjectIdPipe) ownerId: string) {
    return await this.businessService.getByOwnerID(ownerId);
  }
}
/** END OF CONTROLLER */
