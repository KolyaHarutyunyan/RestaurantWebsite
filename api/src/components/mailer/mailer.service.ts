import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { Injectable } from '@nestjs/common';
import { NotificationType } from 'src/util/constants';
import { SendMailDTO } from './dto/sendMail.dto';
import { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, SES_REGION } from './mailer.constants';
import { AuthTemplate } from './templates';

@Injectable()
export class MailerService {
  constructor(private readonly authTemplate: AuthTemplate) {
    this.mailer = new SESClient({
      region: SES_REGION,
      credentials: {
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY,
      },
    });
  }
  private mailer: SESClient;

  //TestMail
  sendTestMail = async () => {
    const mailOptions = this.authTemplate.generateTestEmail();
    return await this.mailer.send(new SendEmailCommand(mailOptions));
  };

  sendMail = async (dto: SendMailDTO) => {
    let options;
    switch (dto.type) {
      case NotificationType.FORGOT_PASSWORD:
        options = this.authTemplate.getForgetPassword(dto.resetToken, dto.email);
        break;
      default:
        break;
    }
    return await this.mailer.send(new SendEmailCommand(options));
  };

  //Private menthods
}
