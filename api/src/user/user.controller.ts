import { Controller, Get, Param } from '@nestjs/common';
import { DatabaseService } from '../services/database/database.service';

@Controller('user')
export class UserController {

  constructor(
    private service: DatabaseService
  ) { }

  @Get(':id')
  public getUser(@Param('id') id: string) {
    return this.service.getUserData(Number(id));
  }

}
