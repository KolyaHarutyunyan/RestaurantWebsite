import { Injectable } from '@nestjs/common';
import { SendEmailCommandInput } from '@aws-sdk/client-ses';
import { DOMAIN_NAME, COMPANY_EMAIL } from '../../../util/constants';

@Injectable()
export class AuthTemplate {
  /** Generates an email template for forgetPassword */
  getForgetPassword = (token: string, email: string): SendEmailCommandInput => {
    const url = `${DOMAIN_NAME}/resetPassword?resetToken=${token}`;
    const displayUrl = `${DOMAIN_NAME}/resetPassword`;
    const mailOptions: SendEmailCommandInput = {
      Destination: { ToAddresses: [email] },
      Source: COMPANY_EMAIL,
      Message: {
        Subject: {
          Charset: 'UTF-8',
          Data: 'Test Email',
        },
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: `<html>
                <h1>Password Reset Form submitted for menuz</h1>
                <br>
                <h3>Dear Customer</h3> <br>
                <p>
                    There has been a request to reset the password for the account 
                    associated with this email. If you have not authorized this update,
                    please reach out to us via email at ${COMPANY_EMAIL}. 
                </p>
                <p>
                    If you have requested a password reset, please click the link below to be redirected
                    to our website in order to create a new password. 
                </p>
                <br>
                <a href=${url}>${displayUrl}</a>
                <br>
                <p>
                    Thank you for being the best part of Menuz and have a great day!
                </p>
            </html> `,
          },
        },
      },
      ReplyToAddresses: ['eachbase@gmail.com'],
    };
    return mailOptions;
  };

  /** For Testing only */
  generateTestEmail = (): SendEmailCommandInput => {
    const input: SendEmailCommandInput = {
      Destination: { ToAddresses: ['harryminasyan@gmail.com'] },
      Source: 'eachbase@gmail.com',
      Message: {
        Subject: {
          Charset: 'UTF-8',
          Data: 'Test Email',
        },
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: `<html>
                  <h1>Password Reset Form submitted for Menuz.com</h1>
                  
              </html> `,
          },
        },
      },
      ReplyToAddresses: ['eachbase@gmail.com'],
    };
    return input;
  };
}
