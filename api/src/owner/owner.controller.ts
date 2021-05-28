import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import {
  ApiBody,
  ApiHeader,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guards';
import { ACCESS_TOKEN } from 'src/constants';
import { ParseObjectIdPipe } from 'src/util/pipes';
import { AuthService, AuthDTO } from '../auth';
import { CreateOwnerDTO, OwnerDTO } from './dto';
import { OwnerService } from './owner.service';

@Controller('owners')
@ApiTags('Owner')
export class OwnerController {
  constructor(
    private readonly ownerService: OwnerService,
    private readonly authService: AuthService,
  ) {}

  /** Create a new owner */
  @Post()
  @ApiBody({ type: CreateOwnerDTO })
  @ApiOkResponse({ type: AuthDTO })
  async register(@Body() createOwnerDTO: CreateOwnerDTO): Promise<AuthDTO> {
    await this.ownerService.create(createOwnerDTO);
    const auth = await this.authService.signup(createOwnerDTO);
    return auth;
  }

  /** Get the user */
  @Get('profile')
  @UseGuards(new AuthGuard())
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOkResponse({ type: OwnerDTO })
  async getUser(
    @Body('id', ParseObjectIdPipe) userId: string,
  ): Promise<OwnerDTO> {
    const owner = await this.ownerService.getOwner(userId);
    return owner;
  }
}
