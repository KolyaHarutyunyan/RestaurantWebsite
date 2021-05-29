import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiHeader, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Role } from 'src/auth';
import { AuthGuard } from 'src/auth/guards';
import { ACCESS_TOKEN } from 'src/constants';
import { ParseObjectIdPipe } from 'src/util/pipes';
import { ImageService } from '../image';
import { BusinessService } from './business.service';
import { CreateBusinessDTO } from './dto';
import { BusinessDTO } from './dto/business.dto';
import { BusinessInterceptor } from './interceptor';

@Controller('business')
@ApiTags('Business')
export class BusinessController {
  constructor(
    private readonly businessService: BusinessService,
    private readonly imageService: ImageService,
  ) {}

  /** Create a new business */
  @Post()
  @UseGuards(new AuthGuard([Role.OWNER]))
  @UseInterceptors(BusinessInterceptor)
  @UseInterceptors(FileInterceptor('logo'))
  @ApiBody({ type: CreateBusinessDTO })
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOkResponse({ type: BusinessDTO })
  async createbusiness(
    @UploadedFile() file,
    @Body('userId', ParseObjectIdPipe) ownerId: string,
    @Body() businessInfo: CreateBusinessDTO,
  ): Promise<any> {
    businessInfo.logo = file;
    console.log(businessInfo, 'Should print');
    const business = await this.businessService.create(ownerId, businessInfo);
    return business;
  }
}
/** END OF CONTROLLER */
