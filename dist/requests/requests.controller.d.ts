import { IProductRequest } from '../models/productRequest';
import { DatabaseService } from '../services/database/database.service';
export declare class RequestsController {
    private service;
    constructor(service: DatabaseService);
    getAllRequestsForUser(): IProductRequest[];
    getSingleRequestForUser(id: string): IProductRequest;
}
