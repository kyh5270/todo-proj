"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TodoCosole_1 = __importDefault(require("./view/TodoCosole"));
const todoConsole = new TodoCosole_1.default();
todoConsole.promptUser();
