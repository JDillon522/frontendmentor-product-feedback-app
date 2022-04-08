import { IUser } from '../../models/user';
import { Database } from './database';
import { IProductRequest } from '../../models/productRequest';
export declare class DatabaseService implements Database {
    getUserData(id: number): IUser;
    getAllRequestsForUser(): IProductRequest[];
    getSingleRequestForUser(id: number): IProductRequest;
}
