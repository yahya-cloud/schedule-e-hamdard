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
const constants_1 = require("../libs/constants");
const utilLib_1 = __importDefault(require("../libs/utilLib"));
exports.default = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (utilLib_1.default.byPass(req.originalUrl)) {
        return next();
    }
    //CUD - Create, Update, Delete
    if (utilLib_1.default.isCUD(req.method)) {
        let user = req.user.user_type;
        let isStaff = constants_1.constants.STAFF.indexOf(user) > -1;
        if (isStaff) {
            return next();
        }
        else {
            res.status(404).json({ message: "Not a staff member" });
        }
    }
    else {
        return next();
    }
});
