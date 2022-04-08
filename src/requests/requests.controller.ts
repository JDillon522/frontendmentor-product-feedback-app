import { Controller, Get, Param } from '@nestjs/common';
import { ProductRequest } from '../models/productRequest';

@Controller('requests')
export class RequestsController {

  constructor(
    // private service: UsersService
  ) {}

  // @Get('')
  // public getAllRequestsForUser(): ProductRequest[] {
  //   return this.service.getAllRequestsForUser();
  // }

  // @Get(':id')
  // public getSingleRequestForUser(@Param('id') id: string) {
  //   return this.service.getSingleRequestForUser(Number(id));
  // }
}
