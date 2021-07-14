import { Controller, Get } from '@nestjs/common';
import { MailerService } from './mailer.service';

@Controller('mailer')
export class MailerController {
  constructor(private readonly mailerService: MailerService) {}
  @Get()
  async sendTestMail() {
    const res = await this.mailerService.sendTestMail();
    return res;
  }
}
