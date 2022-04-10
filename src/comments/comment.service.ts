import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Comment, INewComment, IUpdateComment } from "./comment.entity";

@Injectable()
export class CommentService {

  constructor(
    @InjectRepository(Comment)
    private commentRepo: Repository<Comment>
  ) { }

  public async getComments(): Promise<Comment[]> {
    const comments = await this.commentRepo.createQueryBuilder('comment')
      .where('comment.replyId is NULL')
      .leftJoinAndSelect('comment.replies', 'replies')
      .leftJoinAndSelect('comment.user', 'user')
      .orderBy('comment.id')
      .getMany();
    return comments;
  }

  public async getComment(id: number): Promise<Comment> {
    const comment = await this.commentRepo.createQueryBuilder('comment')
        .where('comment.id = :id', { id: id })
        .leftJoinAndSelect('comment.replies', 'replies')
        .leftJoinAndSelect('replies.user', 'reply_user')
        .leftJoinAndSelect('replies.replyingTo', 'replyingTo_user')
        .leftJoinAndSelect('comment.user', 'user')
        .leftJoinAndSelect('comment.replyingTo', 'replyingTo')
        .orderBy('comment.id')
        .getOne();
    return comment;
  }

  public async createComment(newComment: INewComment): Promise<Comment> {
    const comment = await this.commentRepo.createQueryBuilder()
      .insert()
      .into(Comment)
      .values({
        content:    newComment.content,
        user:       newComment.user,
        replyingTo: newComment.replyingTo,
        reply:      newComment.reply,
        request:    newComment.request
      })
      .returning(['id', 'content', 'replyingTo', 'request'])
      .execute();

    return comment.raw[0];
  }

  public async updateComment(comment: IUpdateComment ): Promise<Comment> {
    const updatedComment = await this.commentRepo.createQueryBuilder()
      .update(Comment)
      .set({
        content: comment.content
      })
      .where("id = :id", { id: comment.id })
      .returning(['id', 'content', 'replyingTo', 'request'])
      .execute();

    return updatedComment.raw[0] as Comment
  }

  public async deleteComment(id: number): Promise<boolean> {
    const deleted = await this.commentRepo.createQueryBuilder()
      .delete()
      .from(Comment)
      .where("id = :id", { id: id })
      .execute()

    return deleted.affected === 1;
  }
}
