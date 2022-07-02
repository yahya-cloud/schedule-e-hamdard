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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAssignedSections = exports.removeClass = exports.addClass = exports.removeTeacher = exports.removeAll = exports.createMany = exports.addTeacher = exports.createSection = exports.getSection = exports.getSections = void 0;
const models_1 = require("../../models");
const getSections = (dataObj) => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield models_1.SectionModel.find(dataObj).lean();
    return result;
});
exports.getSections = getSections;
const getSection = (dataObj) => __awaiter(void 0, void 0, void 0, function* () {
    let { _id } = dataObj;
    let result = yield models_1.SectionModel.findOne({ _id })
        .populate("students")
        .populate({ path: "time_table.teacher_info", select: "name" })
        .populate({
        path: "teachers.teacher_info",
        select: "name email phone_number",
    })
        .lean();
    return result;
});
exports.getSection = getSection;
const getAssignedSections = (dataObj) => __awaiter(void 0, void 0, void 0, function* () {
    let { _id } = dataObj;
    let result = yield models_1.SectionModel.find({
        teachers: { $elemMatch: { teacher_info: _id } },
    }, { info: 1 }).lean();
    return result;
});
exports.getAssignedSections = getAssignedSections;
const createSection = (dataObj) => __awaiter(void 0, void 0, void 0, function* () {
    const { section_name, batch_name } = dataObj;
    let info = { section_name, batch_name };
    let newSection = new models_1.SectionModel({ info });
    let result = yield newSection.save();
    return result;
});
exports.createSection = createSection;
const createMany = (dataObj) => __awaiter(void 0, void 0, void 0, function* () {
    let { sections } = dataObj;
    let result = yield models_1.SectionModel.insertMany(sections);
    return result;
});
exports.createMany = createMany;
const removeAll = (dataObj) => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield models_1.SectionModel.deleteMany(dataObj);
    return result;
});
exports.removeAll = removeAll;
const addTeacher = (dataObj) => __awaiter(void 0, void 0, void 0, function* () {
    let { _id, subject_color, subject, teacher_info } = dataObj;
    let teacher = { subject_color, subject, teacher_info };
    let result = yield models_1.SectionModel.findOneAndUpdate({ _id: _id }, { $push: { teachers: teacher } }, {
        projection: { teachers: 1 },
        new: true,
        useFindAndModify: false,
    }).populate({
        path: "teachers.teacher_info",
        select: "name email phone_number",
    });
    return result;
});
exports.addTeacher = addTeacher;
const removeTeacher = (dataObj) => __awaiter(void 0, void 0, void 0, function* () {
    let { _id, teacher_info } = dataObj;
    let result = yield models_1.SectionModel.findOneAndUpdate({ _id: _id }, { $pull: { teachers: { teacher_info } } }, {
        projection: { teachers: 1 },
        new: true,
        useFindAndModify: false,
    }).populate({
        path: "teachers.teacher_info",
        select: "name email phone_number",
    });
    return result;
});
exports.removeTeacher = removeTeacher;
const addClass = (dataObj) => __awaiter(void 0, void 0, void 0, function* () {
    let { _id, subject_color, title, start, end, teacher_info, description } = dataObj;
    let schedule = {
        title,
        subject_color,
        start,
        end,
        teacher_info,
        description,
    };
    let result = yield models_1.SectionModel.findOneAndUpdate({ _id: _id }, { $push: { time_table: schedule } }, {
        projection: { time_table: 1 },
        new: true,
        useFindAndModify: false,
    });
    return result;
});
exports.addClass = addClass;
const removeClass = (dataObj) => __awaiter(void 0, void 0, void 0, function* () {
    let { _id, class_id } = dataObj;
    let schedule = { _id: class_id };
    let result = yield models_1.SectionModel.findOneAndUpdate({ _id: _id }, { $pull: { time_table: schedule } }, { projection: { time_table: 1 }, new: true, useFindAndModify: false });
    return result;
});
exports.removeClass = removeClass;
