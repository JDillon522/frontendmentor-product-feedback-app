import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { INewRequest, IUpdateRequest, ProductRequest } from './request.entity';
import { RequestsService } from './requests.service';

@Controller('requests')
export class RequestsController {

  constructor(
    private service: RequestsService
  ) {}

  @Get('')
  public async getAllRequestsForUser(): Promise<ProductRequest[]> {
    return this.service.getRequests();
  }

  @Get(':id')
  public async getSingleRequestForUser(@Param('id') id: string): Promise<ProductRequest> {
    return await this.service.getRequest(Number(id));
  }

  @Post()
  public async createRequest(@Body() newRequest: INewRequest): Promise<ProductRequest> {
    return await this.service.createRequest(newRequest);
  }

  @Put()
  public async updateRequest(@Body() updateRequest: IUpdateRequest): Promise<ProductRequest> {
    return await this.service.updateRequest(updateRequest);
  }
}
