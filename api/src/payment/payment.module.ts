import { Module } from '@nestjs/common';
import { OwnerModule } from '../owner/owner.module';
import { PaymentController } from './payment.controller';
import { PaymentSanitizer } from './payment.sanitizer';
import { PaymentService } from './payment.service';

@Module({
  imports: [OwnerModule],
  controllers: [PaymentController],
  providers: [PaymentService, PaymentSanitizer],
  exports: [PaymentService],
})
export class PaymentModule {}
