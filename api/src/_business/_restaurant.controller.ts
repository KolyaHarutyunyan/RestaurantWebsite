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
import { ImageService } from '../image/image.service';
import { IRequest } from '../mainModels';
import {
  CreatebusinessDTO,
  businessResponseDTO,
  UpdatebusinessDTO,
} from './dto';
import { businessService } from './business.service';

@Controller('business')
@ApiTags('businesss')
export class businessController {
  constructor(
    private readonly businessService: businessService,
    private readonly imageService: ImageService,
  ) {}

  @Post('image')
  @UseGuards(new AuthGuard([Role.OWNER]))
  @ApiHeader({ name: ACCESS_TOKEN })
  @UseInterceptors(FileInterceptor('logo'))
  async uploadImage(@UploadedFile() file) {
    const fileURLs = await this.imageService.saveEventImage(file);
    // createbusinessDTO.logoUrl = fileURLs ? fileURLs.imageUrl : null;
    return fileURLs;
  }

  @Post()
  @UseGuards(new AuthGuard([Role.OWNER]))
  @ApiBody({ type: CreatebusinessDTO })
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOkResponse({ type: businessResponseDTO })
  async createbusiness(
    @Body() createbusinessDTO: CreatebusinessDTO,
    @Request() req: any,
  ): Promise<any> {
    const business = await this.businessService.create(
      createbusinessDTO,
      req.body.user._id.toString(),
    );

    const createQr = await this.businessService.createQr(business.id);

    const qr = await this.imageService.saveQRImage(
      path.join(__dirname, '../../qrCodes/qrCode.png'),
    );

    return { business };
  }

  @Get()
  @UseGuards(new AuthGuard([Role.OWNER]))
  @ApiHeader({ name: ACCESS_TOKEN })
  async getbusiness() {
    const business = await this.businessService.getAllbusiness();
    return business;
  }

  @Get('byToken')
  @ApiHeader({ name: ACCESS_TOKEN })
  @UseGuards(new AuthGuard([Role.OWNER]))
  async getbusinessById(@Request() req: IRequest) {
    const business = await this.businessService.getbusinessById(
      req.body.user._id.toString(),
    );
    return business;
  }

  @Put(':id')
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiBody({ type: UpdatebusinessDTO })
  @UseGuards(new AuthGuard([Role.OWNER]))
  async update(
    @Request() req: IRequest,
    @Param('id') id: string,
    @Body() updatebusinessDto: UpdatebusinessDTO,
  ) {
    const updatebusiness = await this.businessService.updatebusiness(
      req.body.user._id.toString(),
      id,
      updatebusinessDto,
    );

    return updatebusiness;
  }

  @Delete(':id')
  @UseGuards(new AuthGuard([Role.OWNER]))
  async remove(@Request() req: IRequest, @Param('id') id: string) {
    const deletebusiness = await this.businessService.deletebusiness(
      req.body.user._id.toString(),
      id,
    );
    await this.imageService.deleteImages([deletebusiness.logoUrl]);

    return { status: true, message: `Successfully deleted`, data: null };
  }
}
