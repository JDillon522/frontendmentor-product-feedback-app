import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductRequest } from "../requests/request.entity";
import { User } from "../user/user.entity"

export interface INewComment {
  request: {
    id: number;
  };
  content: string;
  user: {
    id: number;
  };
  replyingTo: {
    id: number;
  };
  reply?: {
    id: number;
  }
}

export interface IUpdateComment {
  id: number;
  content: string;
}

@Entity()
export class Comment  {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ProductRequest, (request) => request.comments)
  request: ProductRequest;

  @Column()
  content: string;

  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => User)
  replyingTo: User;

  @ManyToOne(() => Comment, comment => comment.replies)
  reply: Comment;

  @OneToMany(() => Comment, comment => comment.reply)
  replies: Comment;

}
