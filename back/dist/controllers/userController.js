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
exports.deleteUsers = exports.createUsers = exports.getUsers = void 0;
const userService_1 = require("../services/userService");
const getUsers = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield (0, userService_1.getUsersService)();
        res.status(200).json(users);
    });
};
exports.getUsers = getUsers;
const createUsers = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, email, active } = req.body;
        const newUser = yield (0, userService_1.createUsersService)({ name, email, active });
        res.status(201).json(newUser);
    });
};
exports.createUsers = createUsers;
const deleteUsers = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.body;
        yield (0, userService_1.deleteUsersService)(id);
        res.status(200).json({ message: 'eliminado correctamente' });
    });
};
exports.deleteUsers = deleteUsers;
