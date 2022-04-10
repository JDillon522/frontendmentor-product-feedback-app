import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Comment, INewComment, IUpdateComment } from "./comment.entity";
import { CommentService } from "./comment.service";

@Controller('comments')
export class CommentsController {

  constructor(
    private commentService: CommentService
  ) { }

  @Get('')
  public async getComments(): Promise<Comment[]> {
    return await this.commentService.getComments();
  }

  @Get(':id')
  public async getComment(@Param('id') id: string): Promise<Comment> {
    return await this.commentService.getComment(Number(id));
  }

  @Post('')
  public async createComment(@Body() newComment: INewComment): Promise<Comment> {
    return await this.commentService.createComment(newComment);
  }

  @Put('')
  public async updateComment(@Body() updateComment: IUpdateComment): Promise<Comment> {
    return await this.commentService.updateComment(updateComment);
  }

  @Delete(':id')
  public async deleteComment(@Param('id') id: string): Promise<boolean> {
    return await this.commentService.deleteComment(Number(id));
  }
}
