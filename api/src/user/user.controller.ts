// import {
//   Body,
//   Controller,
//   Get,
//   Param,
//   Post,
//   UseGuards,
//   Request,
//   Put,
//   Delete,
// } from '@nestjs/common';
// import { ApiBody, ApiHeader, ApiOkResponse, ApiTags } from '@nestjs/swagger';
// import { Role } from 'src/auth/constants';
// import { AuthGuard } from 'src/auth/guards';
// import { ACCESS_TOKEN } from 'src/constants';
// import { IRequest } from 'src/mainModels';
// import { UserService } from './user.service';
// import { UpdateUsertDTO } from './dto/updateUser.dto';
// import { UserDTO } from './dto';
// import { ParseObjectIdPipe } from 'src/util/pipes';

// @ApiTags('users')
// @Controller('user')
// @ApiHeader({ name: ACCESS_TOKEN })
// export class UserController {
//   constructor(private readonly userService: UserService) {}

//   /** Gets all users */
//   @Get()
//   @UseGuards(new AuthGuard([Role.ADMIN]))

//   /** Get the user profile */
//   @Get('myProfile')
//   @UseGuards(new AuthGuard())
//   @ApiOkResponse({ type: UserDTO })
//   async getProfile(
//     @Body('userId', ParseObjectIdPipe) userId: string,
//   ): Promise<UserDTO> {
//     const user = await this.userService.getProfile(userId);
//     return user;
//   }

//   /** Get user by id */
//   //   @Get(':id')
//   //   @UseGuards(new AuthGuard([Role.RESTAURANT_OWNER]))
//   //   async getById(@Param('id') id: string): Promise<any> {
//   //     const getOwner = await this.userService.findById(id);
//   //     return getOwner;
//   //   }

//   @Put('')
//   @ApiBody({ type: UpdateUsertDTO })
//   @UseGuards(new AuthGuard([Role.RESTAURANT_OWNER]))
//   async update(
//     @Request() req: IRequest,
//     @Body() updateUsertDto: UpdateUsertDTO,
//   ) {
//     const update = await this.userService.update(
//       req.body.user._id.toString(),
//       updateUsertDto,
//     );
//     return update;
//   }

//   @Delete()
//   @UseGuards(new AuthGuard([Role.RESTAURANT_OWNER]))
//   async remove(@Request() req: IRequest) {
//     const deleteRestaurant = await this.userService.deleteUser(
//       req.body.user._id.toString(),
//     );
//     return deleteRestaurant;
//   }
// }
