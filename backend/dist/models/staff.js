"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Staff = void 0;
const mongoose_1 = require("mongoose");
const constants_1 = require("../libs/constants");
const user_1 = __importDefault(require("./user"));
const StaffSchema = new mongoose_1.Schema({
    photo: constants_1.schemaConstants.string,
    unique_id: constants_1.schemaConstants.uniqueField,
});
StaffSchema.virtual("sections", {
    ref: "Section",
    localField: "_id",
    foreignField: "teachers.teacher_info",
});
exports.Staff = user_1.default.discriminator("Staff", StaffSchema);
exports.default = exports.Staff;
