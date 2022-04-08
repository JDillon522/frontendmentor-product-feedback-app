import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../models/user";
import { UserController } from "./user.controller";
import { UsersService } from "./users.service";


@Module({
  imports: [
    TypeOrmModule.forFeature([User])
  ],
  providers: [
    UsersService
  ],
  controllers: [
    UserController
  ]
})
export class UsersModule { }
