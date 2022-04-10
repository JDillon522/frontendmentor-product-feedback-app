import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Comment } from "./comment.entity";
import { CommentsController } from "./comment.controller";
import { CommentService } from "./comment.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([Comment])
  ],
  controllers: [
    CommentsController
  ],
  providers: [
    CommentService
  ]
})
export class CommentsModule { }
