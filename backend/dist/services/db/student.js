"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStudent = exports.createMany = exports.getStudents = exports.removeAll = exports.editStudent = exports.deleteStudent = exports.createStudent = void 0;
const authLib = __importStar(require("../../libs/authLib"));
const utilLib_1 = __importDefault(require("../../libs/utilLib"));
const models_1 = require("../../models");
const createStudent = (dataObj) => __awaiter(void 0, void 0, void 0, function* () {
    let password = yield authLib.generatePassword();
    let newStudent = new models_1.StudentModel(Object.assign(Object.assign({}, dataObj), { password }));
    let result = yield newStudent.save();
    let userToReturn = utilLib_1.default.deleteObjectKey(Object.assign({}, result.toObject()), ["id"]);
    return userToReturn;
});
exports.createStudent = createStudent;
const getStudents = (dataObj) => __awaiter(void 0, void 0, void 0, function* () {
    let filter = dataObj.userType === "admin" ? {} : { password: 0 };
    let result = yield models_1.StudentModel.find({}, Object.assign({}, filter)).lean();
    return result;
});
exports.getStudents = getStudents;
const getStudent = (dataObj) => __awaiter(void 0, void 0, void 0, function* () {
    let { _id } = dataObj;
    let result = yield models_1.StudentModel.find({ _id }, { password: 0 })
        .populate({
        path: "section",
    })
        .lean();
    return result;
});
exports.getStudent = getStudent;
const createMany = (dataObj) => __awaiter(void 0, void 0, void 0, function* () {
    let studentsArray = yield Promise.all(dataObj.studentsArray.map((el) => __awaiter(void 0, void 0, void 0, function* () {
        return Object.assign(Object.assign({}, el), { password: yield authLib.generatePassword() });
    })));
    let result = yield models_1.StudentModel.insertMany(studentsArray);
    return result;
});
exports.createMany = createMany;
const removeAll = (dataObj) => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield models_1.StudentModel.deleteMany(dataObj);
    return result;
});
exports.removeAll = removeAll;
const editStudent = (dataObj) => __awaiter(void 0, void 0, void 0, function* () {
    let { _id } = dataObj;
    let result = yield models_1.StudentModel.findOneAndUpdate({ _id: _id }, Object.assign({}, dataObj), {
        new: true,
        useFindAndModify: false,
    });
    return result;
});
exports.editStudent = editStudent;
const deleteStudent = (dataObj) => __awaiter(void 0, void 0, void 0, function* () {
    let { _id } = dataObj;
    let result = yield models_1.StudentModel.findOneAndDelete({ _id: _id }, {
        new: true,
        useFindAndModify: false,
    });
    return result;
});
exports.deleteStudent = deleteStudent;
