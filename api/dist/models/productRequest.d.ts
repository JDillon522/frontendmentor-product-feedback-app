import { IComment } from "./comment";
export interface IProductRequest {
    id: number;
    title: string;
    category: string;
    upvotes: number;
    status: string;
    description: string;
    comments: IComment[];
}
