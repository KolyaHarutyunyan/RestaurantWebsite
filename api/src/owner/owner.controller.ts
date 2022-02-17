import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBody, ApiHeader, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ACCESS_TOKEN } from '../util/constants';
import { ParseObjectIdPipe } from '../util';
import { CreateOwnerDTO, EditOwnerDTO, OwnerDTO } from './dto';
import { OwnerService } from './owner.service';
import { BusinessService } from '../business/business.service';
import { summaries } from './owner.constants';
import { VerifyCall } from 'src/util/decorators/public.decorator';
import { SessionDTO, SignedInDTO } from 'src/auth/dto';
import { AuthService } from 'src/auth/auth.service';

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
  @VerifyCall()
  @ApiBody({ type: CreateOwnerDTO })
  @ApiOkResponse({ type: SignedInDTO })
  @ApiOperation({ summary: summaries.CREATE_ACCOUNT })
  async register(@Body() dto: CreateOwnerDTO): Promise<SignedInDTO> {
    const auth = await this.ownerService.create(dto);
    return auth;
  }

  /** Get the user */
  @Get('profile')
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOkResponse({ type: OwnerDTO })
  @ApiOperation({ summary: summaries.GET_PROFILE })
  async getUser(@Body('userId', ParseObjectIdPipe) userId: string): Promise<OwnerDTO> {
    const owner = await this.ownerService.get(userId);
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
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOkResponse({ type: String, description: 'The Id of the closed account' })
  @ApiOperation({ summary: summaries.CLOSE_ACCOUNT })
  async closeAccount(
    @Param('id', ParseObjectIdPipe) accountId: string,
    @Body('user') user: SessionDTO,
  ): Promise<string> {
    const id = await this.authService.delete(accountId);
    await this.businessService.closeBusinesses(accountId, user);
    return id;
  }
}
