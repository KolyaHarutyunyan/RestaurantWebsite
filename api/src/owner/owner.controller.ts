import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBody,
  ApiHeader,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard, Role } from '../auth';
import { ACCESS_TOKEN } from '../constants';
import { ParseObjectIdPipe } from '../util/pipes';
import { AuthService, AuthDTO } from '../auth';
import { CreateOwnerDTO, OwnerDTO } from './dto';
import { OwnerService } from './owner.service';
import { BusinessService } from '../business';

@Controller('owners')
@ApiTags('Owner')
export class OwnerController {
  constructor(
    private readonly ownerService: OwnerService,
    private readonly authService: AuthService,
    private readonly businessService: BusinessService,
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
    @Body('userId', ParseObjectIdPipe) userId: string,
  ): Promise<OwnerDTO> {
    const owner = await this.ownerService.getOwner(userId);
    return owner;
  }

  /** Get all owners */
  @Get()
  @ApiOperation({ summary: 'Get all owners' })
  async getOwners(): Promise<OwnerDTO[]> {
    const owners = await this.ownerService.getAll();
    return owners;
  }

  /** Close the account for the user. The user will no longer have access to the account */
  @Delete(':id')
  @UseGuards(new AuthGuard([Role.OWNER]))
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOkResponse({ type: String, description: 'The Id of the closed account' })
  async closeAccount(
    @Param('id', ParseObjectIdPipe) accountId: string,
  ): Promise<string> {
    const id = await this.authService.delete(accountId);
    await this.businessService.closeBusiness(accountId);
    return id;
  }
}
