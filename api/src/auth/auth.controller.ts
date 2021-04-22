import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { SignedInDTO, SignupDTO } from './dto';
import { SigninDTO } from './dto/signin.dto';

@Controller('auth')
@ApiTags('Authentication Endpoints')
export class AuthController {
  /** Dependency Injection */
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
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

  @Post('signin')
  @ApiBody({ type: SigninDTO })
  async login(@Body() signinDTO: SigninDTO): Promise<any> {
    const auth = await this.authService.signin(signinDTO);
    const user = await this.userService.findByEmail(signinDTO.email);

    return new SignedInDTO(auth, user);
  }
}
/** End of Controller */
