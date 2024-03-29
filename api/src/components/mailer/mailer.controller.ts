import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiHeader } from '@nestjs/swagger';
import { Public } from '../../util';
import { ACCESS_TOKEN } from 'src/util/constants';
import { ContactDTO } from './dto';
import { MailerService } from './mailer.service';

@Controller('mailer')
export class MailerController {
  constructor(private readonly mailerService: MailerService) {}
  @Get()
  async sendTestMail() {
    const res = await this.mailerService.sendTestMail();
    return res;
  }
  @Post('contactUs')
  @Public()
  async contactUs(@Body() contactDTO: ContactDTO) {
    const res = await this.mailerService.contactUs(contactDTO);
    return res;
  }
}
