import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { INewUser, User } from '../models/user';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>
  ) { }

  async createNewUser(newUser: INewUser): Promise<User> {
    const user = await this.userRepo.create(newUser);
    return user;
  }
  getUserData(id: number): User {
    throw new Error('Method not implemented.');
  }



}
