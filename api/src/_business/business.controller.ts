import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Request,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiHeader, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import * as path from 'path';
import { Role } from 'src/auth/constants';
import { AuthGuard } from 'src/auth/guards';
import { ACCESS_TOKEN } from 'src/constants';
import { ParseObjectIdPipe } from 'src/util/pipes';
import { ImageService } from '../image/image.service';
import { BusinessInfoDTO, BusinessDTO } from './dto';
import { BusinessService } from './business.service';

@Controller('business')
@ApiTags('businesss')
export class BusinessController {
  constructor(
    private readonly businessService: BusinessService,
    private readonly imageService: ImageService,
  ) {}

  /** Create a new business */
  @Post()
  @UseGuards(new AuthGuard([Role.OWNER]))
  @UseInterceptors(FileInterceptor('logo'))
  @ApiBody({ type: BusinessInfoDTO })
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOkResponse({ type: BusinessDTO })
  async createbusiness(
    @UploadedFile() file,
    @Body('userId', ParseObjectIdPipe) userId: string,
    @Body() businessInfo: BusinessInfoDTO,
  ): Promise<any> {
    const business = await this.businessService.create(businessInfo, userId);

    // const createQr = await this.businessService.createQr(business.id);

    const qr = await this.imageService.saveQRImage(
      path.join(__dirname, '../../qrCodes/qrCode.png'),
    );

    return { business };
  }
}
