"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const constants_1 = require("../libs/constants");
const user_1 = __importDefault(require("./user"));
const StudentSchema = new mongoose_1.Schema({
    //enrollment number
    en_number: constants_1.schemaConstants.uniqueField,
    section: { type: mongoose_1.Schema.Types.ObjectId, ref: "Section", default: null },
});
const Student = user_1.default.discriminator("Student", StudentSchema);
exports.default = Student;
//to prevent 2 db calls at time of adding student
//section_id(section) is been stored here
//and section virtually populates students
