import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/util';
import { AdminService } from './admin.service';
import { AdminDTO, CreateAdminDTO } from './dto';

@Controller('admins')
@ApiTags('admins')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  @Public()
  @ApiBody({ type: CreateAdminDTO })
  @ApiOkResponse({ type: AdminDTO })
  async create(@Body() dto: CreateAdminDTO): Promise<AdminDTO> {
    const admin = await this.adminService.create(dto);
    return admin;
  }
}
