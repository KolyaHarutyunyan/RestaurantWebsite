import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { AdminController } from './admin.controller';
import { AdminSanitizer } from './admin.sanitizer';
import { AdminService } from './admin.service';

@Module({
  imports: [AuthModule],
  providers: [AdminSanitizer, AdminService],
  controllers: [AdminController],
})
export class AdminModule {}
