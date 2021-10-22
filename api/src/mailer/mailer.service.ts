import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { Injectable } from '@nestjs/common';
// import { InvitationDTO } from '../auth/dto';
import { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, SES_REGION } from './mailer.constants';
import { AuthTemplate } from './templates';

@Injectable()
export class MailerService {
  constructor() {
    this.authTemplate = new AuthTemplate();
    this.mailer = new SESClient({
      region: SES_REGION,
      credentials: {
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY,
      },
    });
  }
  private mailer: SESClient;
  private authTemplate: AuthTemplate;

  //TestMail
  sendTestMail = async () => {
    const mailOptions = this.authTemplate.generateTestEmail();
    return await this.mailer.send(new SendEmailCommand(mailOptions));
  };

  /** Sends and email provided to it */
  sendForgetPasswordMail = async (mailData: any) => {
    const mailoptons = this.authTemplate.getForgetPasswordTemplate(mailData.token, mailData.email);
    return await this.mailer.send(new SendEmailCommand(mailoptons));
  };

  //Private menthods
}
