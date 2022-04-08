import { IProductRequest } from "../../models/productRequest";
import { IUser } from "../../models/user";
export interface Database {
    getUserData(id: number): IUser;
    getAllRequestsForUser(): IProductRequest[];
    getSingleRequestForUser(id: number): IProductRequest;
}
