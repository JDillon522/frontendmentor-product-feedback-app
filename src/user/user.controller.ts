import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { INewUser, User } from './user.entity';
import { UsersService } from './users.service';

@Controller('user')
export class UserController {

  constructor(
    private userService: UsersService
  ) { }

  @Get('')
  public getUsers() {
    return this.userService.getUsers();
  }

  @Get(':id')
  public getUser(@Param('id') id: string) {
    return this.userService.getUser(Number(id));
  }

  @Post('')
  public async createUser(@Body() newUser: INewUser): Promise<User> {
    const user = await this.userService.createNewUser(newUser);
    return user;
  }
}
