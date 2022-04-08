import { Controller, Get, Param } from '@nestjs/common';
import { IProductRequest } from '../models/productRequest';
import { DatabaseService } from '../services/database/database.service';

@Controller('requests')
export class RequestsController {

  constructor(
    private service: DatabaseService
  ) {}

  @Get('')
  public getAllRequestsForUser(): IProductRequest[] {
    return this.service.getAllRequestsForUser();
  }

  @Get(':id')
  public getSingleRequestForUser(@Param('id') id: string) {
    return this.service.getSingleRequestForUser(Number(id));
  }
}
