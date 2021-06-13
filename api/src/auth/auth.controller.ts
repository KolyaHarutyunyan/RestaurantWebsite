import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  UseGuards,
  Patch,
  Delete,
} from '@nestjs/common';
import {
  ApiBody,
  ApiHeader,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthDTO, ChangePassDTO, ResetPassDTO, SigninDTO } from './dto';
import { ACCESS_TOKEN, RESET_TOKEN } from './constants';
import { ResetPassGuard } from './guards';
import { AuthGuard } from './guards';
import { ParseObjectIdPipe } from 'src/util/pipes';

@Controller('auth')
@ApiTags('Authentication Endpoints')
export class AuthController {
  /** Dependency Injection */
  constructor(private readonly authService: AuthService) {}

  /** Sign in a user */
  @Post('signin')
  @ApiBody({ type: SigninDTO })
  @ApiOkResponse({ type: AuthDTO })
  async login(@Body() signinDTO: SigninDTO): Promise<AuthDTO> {
    const auth = await this.authService.signin(signinDTO);
    return auth;
  }

  /** Changing user password */
  @UseGuards(new AuthGuard())
  @Patch(':id/changePassword')
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiParam({ name: 'id' })
  @ApiBody({ type: ChangePassDTO })
  @ApiOkResponse({ type: AuthDTO })
  async changePassword(
    @Param('id', ParseObjectIdPipe) userId: string,
    @Body() changePassDTO: ChangePassDTO,
  ): Promise<AuthDTO> {
    const auth = await this.authService.changePassword(userId, changePassDTO);
    return auth;
  }

  /** Forgot Password */
  @Get('forgotPassword/:email')
  @ApiParam({ name: 'email' })
  async forgotPassword(@Param('email') email: string) {
    const emailedResponse = await this.authService.forgotPassword(email);
    return emailedResponse;
  }

  /** Reseting the password */
  @Post('resetPassword')
  @ApiBody({ type: ResetPassDTO })
  @ApiHeader({ name: RESET_TOKEN })
  @ApiOkResponse({ type: AuthDTO })
  @UseGuards(new ResetPassGuard())
  async resetPassword(@Body() resetPassDTO: ResetPassDTO): Promise<AuthDTO> {
    const auth = await this.authService.resetPassword(resetPassDTO);
    return auth;
  }

  /** logout the user */
  @Patch(':id/logout')
  @UseGuards(new AuthGuard())
  @ApiParam({ name: 'id', description: 'users Id' })
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOkResponse({
    type: String,
    description: 'the token that was invalidated',
  })
  async logout(
    @Param('id', ParseObjectIdPipe) userId: string,
  ): Promise<string> {
    const sessionToken = await this.authService.logout(userId);
    return sessionToken;
  }

  /** Close the account for the user. The user will no longer have access to the account */
  @Delete(':id')
  @UseGuards(new AuthGuard())
  @ApiHeader({ name: ACCESS_TOKEN })
  @ApiOkResponse({ type: String, description: 'The Id of the closed account' })
  async closeAccount(
    @Param('id', ParseObjectIdPipe) accountId: string,
  ): Promise<string> {
    const id = await this.authService.delete(accountId);
    return id;
  }
}
/** End of Controller */
