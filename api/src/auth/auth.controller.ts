import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { SignupDTO, SignedInDTO } from './dto';

@Controller('auth')
@ApiTags('Authentication Endpoints')
export class AuthController {
  /** Dependency Injection */
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  /** Router Handlers */
  /** Sign up a user */
  @Post('signup')
  @ApiBody({ type: SignupDTO })
  @ApiCreatedResponse({ type: SignedInDTO, description: 'user is created' })
  @ApiResponse({ status: HttpStatus.FOUND, description: 'User Exists' })
  async signup(@Body() signupDTO: SignupDTO): Promise<SignedInDTO> {
    const token = await this.authService.signup(signupDTO);
    const user = await this.userService.create(signupDTO);
    return new SignedInDTO(token, user);
  }
}
/** End of Controller */
