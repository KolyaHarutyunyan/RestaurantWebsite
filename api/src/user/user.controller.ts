import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiHeader, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Role } from 'src/auth/constants';
import { AuthGuard } from 'src/auth/guards';
import { ACCESS_TOKEN } from 'src/constants';
import { UserService } from './user.service';

@ApiTags('users')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService,) {

    }
    @Get(':id')
    @UseGuards(new AuthGuard([Role.RESTAURANT_OWNER]))
    @ApiHeader({ name: ACCESS_TOKEN })
    async getById(@Param('id') id: string): Promise<any> {
        console.log(id);
        const getOwner = await this.userService.findById(id);
        return getOwner;
        //   return new SignedInDTO(auth, user);
    }
}
