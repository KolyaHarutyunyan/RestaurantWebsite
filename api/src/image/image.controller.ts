import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth';
import { OwnerInterceptor } from 'src/owner/interceptor';
import { RemoveImagesDTO } from './dto/removeImages.dto';
import { ImageService } from './image.service';

@Controller('images')
@ApiTags('Images')
@UseGuards(new AuthGuard())
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  /** Upload multiple files */
  @Post('addMany')
  @UseInterceptors(FilesInterceptor('images', 6), OwnerInterceptor)
  @ApiBody({ type: [String], description: 'files to upload' })
  @ApiOkResponse({ type: [String], description: 'ids of added images' })
  async uploadImages(
    @UploadedFiles() files: any[],
    @Body('userId') uploader: string,
  ): Promise<string[]> {
    const urls = await this.imageService.addMany(files, uploader);
    return urls;
  }

  /** Upload a single file */
  @Post('add')
  @UseInterceptors(FileInterceptor('image'), OwnerInterceptor)
  @ApiBody({ type: String, description: 'file to upload' })
  @ApiOkResponse({ type: String, description: 'id of added image' })
  async uploadFile(
    @UploadedFile() file: any,
    @Body('userId') uploader: string,
  ): Promise<string> {
    const fileUrl = await this.imageService.add(file, uploader);
    return fileUrl;
  }

  /** remove images */
  @Post('remove')
  @ApiBody({ type: RemoveImagesDTO, description: 'Image urls to delete' })
  @ApiOkResponse({ type: Number, description: 'Number of files deleted' })
  async removeImages(
    @Body('imageIds') ids: string[],
    @Body('userId') uploader: string,
  ): Promise<number> {
    const numDeleted = await this.imageService.removeMany(ids, uploader);
    return numDeleted;
  }
}
