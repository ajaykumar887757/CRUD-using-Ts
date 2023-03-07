"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const controller = "[Posts_Controller]";
const client_1 = require("@prisma/client");
// import { User } from '@prisma/client';
const prisma = new client_1.PrismaClient();
class UserController {
    createUser(_, args) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { name, email } = args;
                console.log("name");
                // let user = await postsService.create({data : {title , body}})
                const user = yield prisma.user.create({ data: {
                        name: name,
                        email: email
                    } });
                return user;
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    ;
}
exports.UserController = UserController;
