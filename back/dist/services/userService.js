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
exports.deleteUsersService = exports.createUsersService = exports.getUsersService = void 0;
let users = [];
let id = 1;
const getUsersService = function () {
    return __awaiter(this, void 0, void 0, function* () {
        return users;
    });
};
exports.getUsersService = getUsersService;
const createUsersService = function (userData) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, email, active } = userData;
        const newUser = { id, name, email, active };
        users.push(newUser);
        id++;
        return newUser;
    });
};
exports.createUsersService = createUsersService;
const deleteUsersService = function (id) {
    return __awaiter(this, void 0, void 0, function* () {
        users = users.filter((user) => {
            return user.id !== id;
        });
    });
};
exports.deleteUsersService = deleteUsersService;
