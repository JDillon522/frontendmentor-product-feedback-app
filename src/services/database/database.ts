import { IProductRequest } from "../../models/productRequest";
import { IUser } from "../../models/user";

export interface Database {
  // User
  getUserData(id: number): IUser;

  // Requests
  getAllRequestsForUser(): IProductRequest[];
  getSingleRequestForUser(id: number): IProductRequest;
}
