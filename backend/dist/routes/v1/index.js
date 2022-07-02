"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const section_1 = __importDefault(require("./section"));
const staff_1 = __importDefault(require("./staff"));
const student_1 = __importDefault(require("./student"));
const user_1 = __importDefault(require("./user"));
const batch_1 = __importDefault(require("./batch"));
function useRoutes(app) {
    app.use("/v1/batch", batch_1.default);
    app.use("/v1/section", section_1.default);
    app.use("/v1/staff", staff_1.default);
    app.use("/v1/student", student_1.default);
    app.use("/v1/user", user_1.default);
}
exports.default = useRoutes;
