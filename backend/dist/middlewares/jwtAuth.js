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
const user_1 = __importDefault(require("../models/user"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const keys_1 = require("../config/keys");
const utilLib_1 = __importDefault(require("../libs/utilLib"));
const verifyToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const decoded = jsonwebtoken_1.default.verify(token, keys_1.JWT.secret);
    const user = yield user_1.default.findById(decoded.user_id);
    return user;
});
exports.default = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (utilLib_1.default.byPass(req.originalUrl)) {
            return next();
        }
        const token = req.cookies.jwt;
        if (token) {
            const user = yield verifyToken(token);
            if (!user) {
                throw new Error("User not authenticated");
            }
            req.user = user;
            next();
        }
        else {
            throw new Error("User not authenticated");
        }
    }
    catch (error) {
        res.clearCookie("jwt");
        res.status(404).json({ message: error.message });
    }
});
