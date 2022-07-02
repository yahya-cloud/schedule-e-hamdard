"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONNECTION_URL = exports.JWT = exports.auth = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.auth = {
    ALGORITHM: process.env.ALGORITHM || "",
    IV_LENGTH: Number(process.env.IV_LENGTH) || 1,
    ENCRYPTION_KEY: process.env.ENCRYPTION_KEY || "some key",
};
exports.JWT = {
    secret: process.env.JWT_SECRET || "secret",
    expiresIn: "7d",
};
exports.CONNECTION_URL = process.env.CONNECTION_URL;
