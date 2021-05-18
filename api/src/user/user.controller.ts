import { Body, Controller, Get, Param, Post, UseGuards, Request, Put } from '@nestjs/common';
import { ApiBody, ApiHeader, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Role } from 'src/auth/constants';
import { AuthGuard } from 'src/auth/guards';
import { ACCESS_TOKEN } from 'src/constants';
import { IRequest } from 'src/mainModels';
import { UserService } from './user.service';
import { UpdateUsertDTO } from './dto/updateUser.dto';
import { AuthService } from '../auth/auth.service';
@ApiTags('users')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService,

    ) {

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
    @Put()
    @ApiHeader({ name: ACCESS_TOKEN })
    @UseGuards(new AuthGuard([Role.RESTAURANT_OWNER]))
    async update(@Request() req: IRequest, @Body() updateUsertDto: UpdateUsertDTO) {
        const update = await this.userService.update(req.body.user._id.toString(), updateUsertDto);
        return update;

    }
}
