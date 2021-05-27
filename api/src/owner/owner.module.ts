import { Module } from "@nestjs/common";
import { AuthModule } from "src/auth";
import { OwnerSanitizer } from "./interceptor";
import { OwnerController } from "./owner.controller";
import { OwnerService } from "./owner.service";

@Module({
  imports: [AuthModule],
  controllers: [OwnerController],
  providers: [OwnerService, OwnerSanitizer],
})
export class OwnerModule {}
