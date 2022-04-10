import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { INewRequest, IUpdateRequest, ProductRequest } from "./request.entity";

@Injectable()
export class RequestsService {

  constructor(
    @InjectRepository(ProductRequest)
    private requestRepo: Repository<ProductRequest>
  ) { }

  public async getRequests(): Promise<ProductRequest[]> {
    const requests = await this.requestRepo.createQueryBuilder().getMany();
    return requests;
  }

  public async getRequest(id: number): Promise<ProductRequest> {
    const requests = await this.requestRepo.createQueryBuilder('request')
      .where('request.id = :id', { id: id })
      .leftJoinAndSelect('request.comments', 'comments')
        .leftJoinAndSelect('comments.replies', 'replies')
        .leftJoinAndSelect('replies.user', 'reply_user')
        .leftJoinAndSelect('replies.replyingTo', 'replyingTo_user')
        .leftJoinAndSelect('comments.user', 'comment_user')
        .leftJoinAndSelect('comments.replyingTo', 'comment_replyingTo')
      .leftJoinAndSelect('request.creator', 'creator')
      .getOne()

    return requests;
  }

  public async createRequest(newRequest: INewRequest): Promise<ProductRequest> {
    const request = await this.requestRepo.createQueryBuilder()
      .insert()
      .values({
        title:       newRequest.title,
        category:    newRequest.category,
        upVotes:     0,
        status:      newRequest.status,
        description: newRequest.description,
        creator:     newRequest.creator
      })
      .returning(['title', 'category', 'upVotes', 'status', 'description', 'creator'])
      .execute();

    return request.raw[0];
  }

  public async updateRequest(updateRequest: IUpdateRequest): Promise<ProductRequest> {
    const request = await this.requestRepo.createQueryBuilder()
      .update(ProductRequest)
      .where('id = :id', { id: updateRequest.id })
      .set({
        title:       updateRequest.title,
        category:    updateRequest.category,
        upVotes:     updateRequest.upVotes,
        status:      updateRequest.status,
        description: updateRequest.description
      })
      .returning(['title', 'category', 'upVotes', 'status', 'description', 'creator'])
      .execute();

    return request.raw[0];
  }
}
