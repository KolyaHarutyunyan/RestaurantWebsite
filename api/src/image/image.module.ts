import { Module } from '@nestjs/common';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';
import { ImageStorage } from './image.storage';
import { ImageSanitizer } from './interceptor';

@Module({
  providers: [ImageService, ImageStorage, ImageSanitizer],
  controllers: [ImageController],
  exports: [ImageService, ImageSanitizer],
})
export class ImageModule {}
