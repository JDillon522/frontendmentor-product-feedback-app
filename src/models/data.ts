import { IProductRequest } from "./productRequest";
import { IUser } from "./user";

export interface IData {
  currentUser: IUser;
  productRequests: IProductRequest[];
}
