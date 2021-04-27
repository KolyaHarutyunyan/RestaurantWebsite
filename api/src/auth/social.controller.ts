import {
    Controller,
    HttpStatus,
    Get,
    UseGuards,
    Req,
    Redirect,
} from '@nestjs/common';
import { DOMAIN_NAME } from '../constants';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';

import { SignedInDTO, SocialLoginDTO } from './dto';
import {
    FacebookAuthGuard
} from './strategies/passport.guards';
@Controller('auth')
@ApiTags('social')
export class SocialController {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService,
    ) { }
    @Get('/facebook')
    @UseGuards(FacebookAuthGuard)
    async facebookAuth() {
        console.log('facebook login endpoint activated');
    }

    /** Social Signin Redirect */
    @Get('/facebook/redirected')
    @UseGuards(FacebookAuthGuard)
    @Redirect(DOMAIN_NAME, HttpStatus.PERMANENT_REDIRECT)
    async facebookAuthRedirected(@Req() req) {
        const signedInDTO = await this.socialRedirectHandler(req.user);
        return {
            url: `${DOMAIN_NAME}/socialLogin?token=${signedInDTO.auth}`,
        };
    }
    /**
   * The function utlized by social login controller functions. It is generic and is meant to be reused for multiple login methods
   * @param req - the request object passed in
   */
    async socialRedirectHandler(socialLoginDTO: SocialLoginDTO) {
        const auth = await this.authService.socialLogin(socialLoginDTO);
        let user = await this.userService.findByEmail(socialLoginDTO.email);
        if (!user) {
            user = await this.userService.create(socialLoginDTO);
        }
        return new SignedInDTO(auth, user);
    }
}