import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { INewUser, User } from './user.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>
  ) { }

  async createNewUser(newUser: INewUser): Promise<User> {
    const user = await this.userRepo.create(newUser);
    await this.userRepo.save(user);
    return user;
  }

  async getUsers(): Promise<User[]> {
    const res = await this.userRepo.createQueryBuilder().getMany();

    return res;
  }

  async getUser(id: number): Promise<User> {
    const res = await this.userRepo.findOne(id);

    return res;
  }



}
