import { Module } from '@nestjs/common';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';
import { ImageStorage } from './image.storage';

@Module({
  providers: [ImageService, ImageStorage],
  controllers: [ImageController],
  exports: [ImageService],
})
export class ImageModule {}
