import { DatabaseService } from '../services/database/database.service';
export declare class UserController {
    private service;
    constructor(service: DatabaseService);
    getUser(id: string): import("../models/user").IUser;
}
