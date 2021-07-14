import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBody,
  ApiHeader,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ACCESS_TOKEN } from '../constants';
import { ParseObjectIdPipe } from '../util';
import { AuthService, AuthDTO, AuthGuard, Role } from '../auth';
import { CreateOwnerDTO, EditOwnerDTO, OwnerDTO } from './dto';
import { OwnerService } from './owner.service';
import { BusinessService } from '../business';
import { summaries } from './owner.constants';

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
  @ApiOperation({ summary: summaries.CREATE_ACCOUNT })
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
  @ApiOperation({ summary: summaries.GET_PROFILE })
  async getUser(
    @Body('userId', ParseObjectIdPipe) userId: string,
  ): Promise<OwnerDTO> {
    const owner = await this.ownerService.getOwner(userId);
    return owner;
  }

  /** Get all owners */
  @Get()
  @ApiOkResponse({ type: [OwnerDTO] })
  @ApiOperation({ summary: summaries.GET_ALL })
  async getOwners(): Promise<OwnerDTO[]> {
    const owners = await this.ownerService.getAll();
    return owners;
  }

  @Patch()
  @UseGuards(new AuthGuard([Role.OWNER]))
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiBody({ type: EditOwnerDTO })
  @ApiOkResponse({ type: OwnerDTO })
  @ApiOperation({ summary: summaries.EDIT_INFO })
  async edit(@Body() editDTO: EditOwnerDTO): Promise<OwnerDTO> {
    const owner = await this.ownerService.edit(editDTO);
    return owner;
  }

  /** Close the account for the user. The user will no longer have access to the account */
  @Delete(':id')
  @UseGuards(new AuthGuard([Role.OWNER]))
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOkResponse({ type: String, description: 'The Id of the closed account' })
  @ApiOperation({ summary: summaries.CLOSE_ACCOUNT })
  async closeAccount(
    @Param('id', ParseObjectIdPipe) accountId: string,
  ): Promise<string> {
    const id = await this.authService.delete(accountId);
    await this.businessService.closeBusiness(accountId);
    return id;
  }
}
