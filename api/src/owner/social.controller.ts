import { Controller, Get, Redirect, Req, UseGuards } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { FacebookAuthGuard, GoogleAuthGuard, TwitterAuthGuard } from "../auth";
import { DOMAIN_NAME } from "../constants";
import { AuthService, SocialLoginDTO } from "../auth";
import { OwnerService } from "./owner.service";

@Controller("owners/socials")
@ApiTags("Owner- Social")
export class SocialController {
  constructor(
    private readonly ownerService: OwnerService,
    private readonly authService: AuthService
  ) {}

  /** Google endpoint */
  @Get("/google")
  @UseGuards(GoogleAuthGuard)
  @ApiResponse({ description: "use to login with google" })
  async googleAuth(@Req() req) {
    console.log("google login");
  }

  /** Social Signin Redirect */
  @Get("/google/redirected")
  @UseGuards(GoogleAuthGuard)
  @Redirect(DOMAIN_NAME)
  async googleAuthRedirected(@Req() req) {
    const redirectUrl = await this.socialRedirectHandler(req.user);
    return redirectUrl;
  }

  /** Facebook login */
  @Get("/facebook")
  @UseGuards(FacebookAuthGuard)
  async facebookAuth() {
    console.log("facebook login");
  }

  /** Social Signin Redirect */
  @Get("/facebook/redirected")
  @UseGuards(FacebookAuthGuard)
  @Redirect(DOMAIN_NAME)
  async facebookAuthRedirected(@Req() req) {
    const redirectUrl = await this.socialRedirectHandler(req.user);
    return redirectUrl;
  }

  /** Twitter login */
  @Get("/twitter")
  @UseGuards(TwitterAuthGuard)
  @ApiResponse({ description: "use this to login with Twitter" })
  async twitterAuth() {
    console.log("twitter login");
  }

  /** Social Signin Redirect */
  @Get("/twitter/redirected")
  @UseGuards(TwitterAuthGuard)
  @Redirect(DOMAIN_NAME)
  async twitterAuthRedirected(@Req() req) {
    const redirectUrl = await this.socialRedirectHandler(req.user);
    return redirectUrl;
  }

  /**
   * The function utlized by social login controller functions. It is generic and is meant to be reused for multiple login methods
   */
  async socialRedirectHandler(socialLoginDTO: SocialLoginDTO) {
    await this.ownerService.createWithSocial(socialLoginDTO);
    const auth = await this.authService.socialLogin(socialLoginDTO);
    const redirectUrl = {
      url: `${DOMAIN_NAME}/socialLogin?token=${auth.accessToken}`,
    };
    return redirectUrl;
  }
}
