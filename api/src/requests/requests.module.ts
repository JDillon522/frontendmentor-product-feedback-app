import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RequestsController } from "./requests.controller";
import { RequestsService } from "./requests.service";
import { ProductRequest } from "./request.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductRequest])
  ],
  controllers: [
    RequestsController
  ],
  providers: [
    RequestsService
  ]

})
export class RequestsModule { }
