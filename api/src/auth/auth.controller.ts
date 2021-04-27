import { Body, Controller, HttpStatus, Post, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBody, ApiHeader, ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { ChangePassDTO, PassChangedDTO, ResetPassDTO, SignedInDTO, SignupDTO } from './dto';
import { SigninDTO } from './dto/signin.dto';
import { MailerService } from '../mailer';
import { ACCESS_TOKEN, RESET_TOKEN } from './constants';
import { ResetPassGuard } from './guards/resetPass.guard';
import { AuthGuard } from './guards';


@Controller('auth')
@ApiTags('Authentication Endpoints')
export class AuthController {
  /** Dependency Injection */
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly mailerService: MailerService,

  ) { }

  /** Router Handlers */
  /** Sign up a user */
  @Post('signup')
  @ApiBody({ type: SignupDTO })
  @ApiOkResponse({ type: SignedInDTO })
  @ApiResponse({ status: HttpStatus.FOUND, description: 'User Exists' })
  async signup(@Body() signupDTO: SignupDTO): Promise<SignedInDTO> {
    const auth = await this.authService.signup(signupDTO);
    console.log(auth);
    const user = await this.userService.create(signupDTO);
    return new SignedInDTO(auth, user);
  }

   /** Changing user password */
   @UseGuards(new AuthGuard())
   @Post('changePassword')
   @ApiHeader({ name: ACCESS_TOKEN })
   @ApiBody({ type: ChangePassDTO })
   @ApiOkResponse({ type: PassChangedDTO })
   async changePassword(
     @Body() changePassDTO: ChangePassDTO,
   ): Promise<PassChangedDTO> {
     const auth = await this.authService.changePassword(changePassDTO);
     return new PassChangedDTO(auth.token);
   }
   
  /** Forgot Password */
  @Get('forgotPassword/:email')
  async forgotPassword(@Param('email') email: string) {
    const emailOptions = await this.authService.forgotPassword(email);
    await this.mailerService.sendForgetPasswordMail(emailOptions);
    return;
  }

   /** Reseting the password */
   @Post('resetPassword')
   @ApiBody({ type: ResetPassDTO })
   @ApiHeader({ name: RESET_TOKEN })
   @ApiOkResponse({ type: SignedInDTO })
   @UseGuards(new ResetPassGuard())
   async resetPassword(
     @Body() resetPassDTO: ResetPassDTO,
   ): Promise<SignedInDTO> {
     const auth = await this.authService.resetPassword(resetPassDTO);
     const user = await this.userService.findByEmail(resetPassDTO.email);
     return new SignedInDTO(auth, user);
   }


  @Post('signin')
  @ApiOkResponse({ type: SignedInDTO })
  @ApiBody({ type: SigninDTO })
  async login(@Body() signinDTO: SigninDTO): Promise<any> {
    const auth = await this.authService.signin(signinDTO);
    const user = await this.userService.findByEmail(signinDTO.email);

    return new SignedInDTO(auth, user);
  }
  
}
/** End of Controller */

