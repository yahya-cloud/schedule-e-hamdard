"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const jwtAuth_1 = __importDefault(require("./jwtAuth"));
const staff_1 = __importDefault(require("./staff"));
const corsOptions = {
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type",
    credentials: true,
};
const addMiddleWare = (app) => {
    app.use((0, cors_1.default)(corsOptions));
    app.set("trust proxy", 1);
    app.use(express_1.default.json());
    app.use((0, cookie_parser_1.default)()); // Parse cookies
    app.use(express_1.default.urlencoded({ extended: true }));
    if (process.env.NODE_ENV !== "production") {
        app.use((0, morgan_1.default)("dev"));
    }
    app.use(jwtAuth_1.default);
    app.use(staff_1.default);
};
exports.default = addMiddleWare;
