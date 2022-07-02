"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.StudentModel = exports.StaffModel = exports.SectionModel = exports.BatchModel = void 0;
const batch_1 = __importDefault(require("./batch"));
exports.BatchModel = batch_1.default;
const section_1 = __importDefault(require("./section"));
exports.SectionModel = section_1.default;
const staff_1 = __importDefault(require("./staff"));
exports.StaffModel = staff_1.default;
const student_1 = __importDefault(require("./student"));
exports.StudentModel = student_1.default;
const user_1 = __importDefault(require("./user"));
exports.UserModel = user_1.default;
