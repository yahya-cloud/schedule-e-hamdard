"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const constants_1 = require("../libs/constants");
//sub schemas
const SectionInfoSchema = new mongoose_1.Schema({
    section_name: constants_1.schemaConstants.string,
    batch_name: constants_1.schemaConstants.string,
});
const TeacherInfoSchema = new mongoose_1.Schema({
    subject_color: constants_1.schemaConstants.string,
    subject: constants_1.schemaConstants.string,
    teacher_info: { type: mongoose_1.Schema.Types.ObjectId, ref: "Staff", default: null },
});
const TimeTableSchema = new mongoose_1.Schema({
    subject_color: constants_1.schemaConstants.string,
    title: constants_1.schemaConstants.string,
    start: constants_1.schemaConstants.date,
    end: constants_1.schemaConstants.date,
    description: constants_1.schemaConstants.string,
    teacher_info: { type: mongoose_1.Schema.Types.ObjectId, ref: "Staff", default: null },
});
//main schema
const SectionSchema = new mongoose_1.Schema({
    info: { type: SectionInfoSchema, required: true },
    time_table: [TimeTableSchema],
    teachers: [TeacherInfoSchema],
});
//populating students virtually
SectionSchema.virtual("students", {
    ref: "Student",
    localField: "_id",
    foreignField: "section",
});
const SectionModel = (0, mongoose_1.model)("Section", SectionSchema);
exports.default = SectionModel;
//to prevent 2 db calls at time of adding student
//section_id(section) is been stored student schema
//and section virtually populates students
