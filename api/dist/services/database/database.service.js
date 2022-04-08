"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseService = void 0;
const common_1 = require("@nestjs/common");
const data_1 = require("./data");
let DatabaseService = class DatabaseService {
    getUserData(id) {
        const res = data_1.data.find(d => d.currentUser.id === id);
        return res.currentUser;
    }
    getAllRequestsForUser() {
        const res = [];
        data_1.data.forEach(user => {
            user.productRequests.forEach(request => {
                request.comments = [];
                res.push(request);
            });
        });
        return res;
    }
    getSingleRequestForUser(id) {
        const req = data_1.data.find(user => {
            return user.productRequests.find(request => {
                return request.id === id;
            });
        });
        const request = req.productRequests.find(request => request.id === id);
        return request;
    }
};
DatabaseService = __decorate([
    (0, common_1.Injectable)()
], DatabaseService);
exports.DatabaseService = DatabaseService;
//# sourceMappingURL=database.service.js.map