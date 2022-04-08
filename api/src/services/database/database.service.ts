import { Injectable } from '@nestjs/common';
import { IUser } from '../../models/user';
import { Database } from './database';
import { data } from './data';
import { IProductRequest } from '../../models/productRequest';

@Injectable()
export class DatabaseService implements Database {

  getUserData(id: number): IUser {
    const res = data.find(d => d.currentUser.id === id);
    return res.currentUser;
  }

  getAllRequestsForUser(): IProductRequest[] {
    const res = [];
    data.forEach(user => {
      user.productRequests.forEach(request => {
        request.comments = [];
        res.push(request);
      });
    });

    return res;
  }

  getSingleRequestForUser(id: number): IProductRequest {
    // Yuck
    const req = data.find(user => {
      return user.productRequests.find(request => {
        return request.id === id;
      });
    });

    const request = req.productRequests.find(request => request.id === id);
    return request;
  }

}
