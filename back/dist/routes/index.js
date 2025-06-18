"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const autenticacion_1 = __importDefault(require("../middlewares/autenticacion"));
const router = (0, express_1.Router)();
router.post('/users', userController_1.createUsers);
router.get('/users', autenticacion_1.default, userController_1.getUsers);
router.delete('/users', userController_1.deleteUsers);
exports.default = router;
