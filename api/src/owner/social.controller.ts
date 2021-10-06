import { Controller, Get, Redirect, Req, UseGuards, Post, Body, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppleStrategy, FacebookAuthGuard, GoogleAuthGuard, TwitterAuthGuard, Role } from '../auth';
import { DOMAIN_NAME } from '../constants';
import { AuthService, SocialLoginDTO } from '../auth';
import { OwnerService } from './owner.service';
import { AppleAuthorizedResponse } from '../apple-signin';

@Controller('owners/socials')
@ApiTags('Owner- Social')
export class SocialController {
  constructor(
    private readonly ownerService: OwnerService,
    private readonly authService: AuthService,
    private readonly appleStrategy: AppleStrategy,
  ) {}

  /** Google endpoint */
  @Get('/google')
  @UseGuards(GoogleAuthGuard)
  @ApiResponse({ description: 'use to login with google' })
  async googleAuth(@Req() req) {
    console.log('google login');
  }

  /** Social Signin Redirect */
  @Get('/google/redirected')
  @UseGuards(GoogleAuthGuard)
  @Redirect(DOMAIN_NAME)
  async googleAuthRedirected(@Req() req) {
    const redirectUrl = await this.socialRedirectHandler(req.user);
    return redirectUrl;
  }

  /** Facebook login */
  @Get('/facebook')
  @UseGuards(FacebookAuthGuard)
  async facebookAuth() {
    console.log('facebook login');
  }

  /** Social Signin Redirect */
  @Get('/facebook/redirected')
  @UseGuards(FacebookAuthGuard)
  @Redirect(DOMAIN_NAME)
  async facebookAuthRedirected(@Req() req) {
    const redirectUrl = await this.socialRedirectHandler(req.user);
    return redirectUrl;
  }

  /** Twitter login */
  @Get('/twitter')
  @UseGuards(TwitterAuthGuard)
  @ApiResponse({ description: 'use this to login with Twitter' })
  async twitterAuth() {
    console.log('twitter login');
  }

  /** Social Signin Redirect */
  @Get('/twitter/redirected')
  @UseGuards(TwitterAuthGuard)
  @Redirect(DOMAIN_NAME)
  async twitterAuthRedirected(@Req() req) {
    const redirectUrl = await this.socialRedirectHandler(req.user);
    return redirectUrl;
  }

  /** APPLE STRATEGY - CUSTOME */
  @Get('/apple')
  @ApiResponse({ description: 'use this to login with Apple' })
  @Redirect()
  async appleAuthCustome() {
    const url = this.appleStrategy.getAuthorizationURL();
    return { url };
  }

  /** Social Signin Redirect */
  @Post('/apple/redirected')
  @Redirect()
  async appleCallbackCustome(@Body() authResponse: AppleAuthorizedResponse) {
    const response = await this.appleStrategy.authorize(authResponse);
    try {
      const socialLogin = await this.authService.appleLogin(response, Role.OWNER);
      if (socialLogin.createUserDTO) {
        await this.ownerService.createWithSocial(socialLogin.createUserDTO);
      }
      return {
        url: `${DOMAIN_NAME}/socialLogin?token=${socialLogin.authDTO?.accessToken}`,
      };
    } catch (err) {
      if (err.status === HttpStatus.EXPECTATION_FAILED) {
        return {
          url: `${DOMAIN_NAME}/appleSigninError`,
        };
      } else {
        throw err;
      }
    }
  }

  /**
   * The function utlized by social login controller functions. It is generic and is meant to be reused for multiple login methods
   */
  async socialRedirectHandler(dto: SocialLoginDTO) {
    const socialDTO = await this.authService.socialLogin(dto, Role.OWNER);
    await this.ownerService.createWithSocial(socialDTO.createUserDTO);
    const redirectUrl = {
      url: `${DOMAIN_NAME}/socialLogin?token=${socialDTO.authDTO?.accessToken}`,
    };
    return redirectUrl;
  }
}
