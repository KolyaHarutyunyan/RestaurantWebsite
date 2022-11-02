import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { PaymentController } from './payment.controller';
import { PaymentSanitizer } from './payment.sanitizer';
import { PaymentService } from './payment.service';

@Module({
  imports: [AuthModule],
  controllers: [PaymentController],
  providers: [PaymentService, PaymentSanitizer],
  exports: [PaymentService],
})
export class PaymentModule {}
