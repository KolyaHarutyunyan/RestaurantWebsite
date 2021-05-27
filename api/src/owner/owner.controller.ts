import { Body, Controller, Post } from "@nestjs/common";
import { ApiBody, ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { AuthService, AuthDTO } from "../auth";
import { CreateOwnerDTO } from "./dto";
import { OwnerService } from "./owner.service";

@Controller("owners")
@ApiTags("Owner")
export class OwnerController {
  constructor(
    private readonly ownerService: OwnerService,
    private readonly authService: AuthService
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
}
