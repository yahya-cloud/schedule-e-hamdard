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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserWithToken = exports.logout = exports.login = exports.createMany = exports.removeAll = exports.getUsers = void 0;
const db_1 = require("../services/db");
const utilLib_1 = __importDefault(require("../libs/utilLib"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = yield db_1.user.getUsers({});
        res.status(200).json({ data, message: "" });
    }
    catch (error) {
        //@ts-ignore
        res.status(400).json({ message: error.message });
    }
});
exports.getUsers = getUsers;
const getUserWithToken = (req, res) => {
    if (req.user) {
        //@ts-ignore
        let data = utilLib_1.default.deleteObjectKey(Object.assign({}, req.user.toObject()), [
            "password",
            "id",
            "__v",
        ]);
        res.status(200).json({ data, message: "" });
    }
    else {
        res.status(400).json({ data: "", message: "" });
    }
};
exports.getUserWithToken = getUserWithToken;
const removeAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = yield db_1.user.removeAll({});
        res.status(200).json({ data, message: "Removed users successfully" });
    }
    catch (error) {
        //@ts-ignore
        res.status(400).json({ message: error.message });
    }
});
exports.removeAll = removeAll;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        utilLib_1.default.checkMissingFieldsAndType(Object.assign({}, req.body), {
            id: "string",
            password: "string",
        });
        let { fetchedUser, token } = yield db_1.user.login(Object.assign({}, req.body));
        res.cookie("jwt", token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 7,
        });
        return res
            .status(200)
            .json({ data: fetchedUser, message: "User successfully logged-in" });
    }
    catch (error) {
        //@ts-ignore
        res.status(404).json({ message: error.message });
    }
});
exports.login = login;
const createMany = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let userArray = req.body;
        let data = yield db_1.user.createMany({ userArray });
        res.status(200).json({ data, message: "Users created  Successful" });
    }
    catch (error) {
        //@ts-ignore
        res.status(400).json({ message: error.message });
    }
});
exports.createMany = createMany;
const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.clearCookie("jwt");
    res.status(200).json({ message: "User logout Successful" });
});
exports.logout = logout;
