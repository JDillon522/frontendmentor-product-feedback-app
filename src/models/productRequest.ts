import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Comment } from "./comment";
import { User } from "./user";

@Entity()
export class ProductRequest {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User)
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

  @JoinColumn()
  @OneToMany(() => Comment, (comment) => comment.id)
  comments: Comment;
};
