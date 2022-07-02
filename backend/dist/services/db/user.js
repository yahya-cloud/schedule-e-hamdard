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
exports.createMany = exports.login = exports.removeAll = exports.getUsers = void 0;
const models_1 = require("../../models");
const authLib = __importStar(require("../../libs/authLib"));
const utilLib_1 = __importDefault(require("../../libs/utilLib"));
const getUsers = (dataObj) => __awaiter(void 0, void 0, void 0, function* () {
    let data = yield models_1.UserModel.find(dataObj).lean();
    data = data.map((el) => {
        return Object.assign(Object.assign({}, el), { password: authLib.decryptString(el.password) });
    });
    return data;
});
exports.getUsers = getUsers;
const login = (dataObj) => __awaiter(void 0, void 0, void 0, function* () {
    let { id, password } = dataObj;
    let fetchedUser = yield models_1.UserModel.findOne({
        $or: [
            { __t: "Student", en_number: id },
            { __t: "Staff", unique_id: id },
        ],
    }, { id: 0, __t: 0, __v: 0 });
    if (!fetchedUser) {
        throw new Error("User Not found");
    }
    let correctPassword = utilLib_1.default.compareStrings(authLib.decryptString(fetchedUser.password), password);
    if (!correctPassword) {
        throw new Error("Password is Incorrect");
    }
    let token = authLib.issueToken(String(fetchedUser._id));
    let userToReturn = utilLib_1.default.deleteObjectKey(Object.assign({}, fetchedUser.toObject()), [
        "password",
        "id",
    ]);
    let data = { fetchedUser: userToReturn, token };
    return data;
});
exports.login = login;
const createMany = (dataObj) => __awaiter(void 0, void 0, void 0, function* () {
    let userArray = yield Promise.all(dataObj.userArray.map((el) => __awaiter(void 0, void 0, void 0, function* () {
        return Object.assign(Object.assign({}, el), { password: authLib.encryptString(el.password) });
    })));
    let data = yield models_1.UserModel.insertMany(userArray);
    return data;
});
exports.createMany = createMany;
const removeAll = (dataObj) => __awaiter(void 0, void 0, void 0, function* () {
    let data = yield models_1.UserModel.deleteMany(dataObj);
    return data;
});
exports.removeAll = removeAll;
