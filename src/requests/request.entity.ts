import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Comment } from "../comments/comment.entity";
import { User } from "../user/user.entity";

export interface INewRequest {
  creator: User;
  title: string;
  category: string;
  upVotes: number;
  status: string;
  description: string;
}

export interface IUpdateRequest {
  id: number;
  title: string;
  category: string;
  upVotes: number;
  status: string;
  description: string;
}

@Entity()
export class ProductRequest {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn()
  creator: User;

  @Column()
  title: string;

  @Column()
  category: string;

  @Column()
  upVotes: number;

  @Column()
  status: string;

  @Column()
  description: string;

  @OneToMany(() => Comment, (comment) => comment.request)
  comments: Comment[];
};
