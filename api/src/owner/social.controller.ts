import { Controller, Get, Redirect, Req, UseGuards, Post, Body, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppleStrategy, FacebookAuthGuard, GoogleAuthGuard, TwitterAuthGuard } from '../auth';
import { DOMAIN_NAME } from '../util/constants';
import { AuthService } from '../auth/auth.service';
import { OwnerService } from './owner.service';
import { AppleAuthorizedResponse } from '../components/apple-signin';

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
    return await this.ownerService.socialLogin(req.user);
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
    return await this.ownerService.socialLogin(req.user);
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
    return await this.ownerService.socialLogin(req.user);
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
      return await this.ownerService.socialLogin(response);
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
}
