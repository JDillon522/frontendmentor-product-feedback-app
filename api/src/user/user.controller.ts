import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { INewUser, User } from '../models/user';
import { UsersService } from './users.service';

@Controller('user')
export class UserController {

  constructor(
    private service: UsersService
  ) { }

  @Get(':id')
  public getUser(@Param('id') id: string) {
    return this.service.getUserData(Number(id));
  }

  @Post('')
  public async createUser(@Body() newUser: INewUser): Promise<User> {
    const user = await this.service.createNewUser(newUser);
    return user;
  }
}
