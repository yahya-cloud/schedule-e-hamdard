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
exports.getAssignedSections = exports.removeAll = exports.createMany = exports.createSection = exports.getSection = exports.addTeacher = exports.removeTeacher = exports.getSections = exports.removeClass = exports.addClass = void 0;
const utilLib_1 = __importDefault(require("../libs/utilLib"));
const db_1 = require("../services/db");
const getSections = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = yield db_1.section.getSections({});
        res.status(200).json({ data, message: "" });
    }
    catch (error) {
        //@ts-ignore
        res.status(400).json({ message: error.message });
    }
});
exports.getSections = getSections;
const getAssignedSections = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let _id = req.user._id;
        let data = yield db_1.section.getAssignedSections({ _id });
        res.status(200).json({ data, message: "" });
    }
    catch (error) {
        //@ts-ignore
        res.status(400).json({ message: error.message });
    }
});
exports.getAssignedSections = getAssignedSections;
const getSection = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let _id = req.params.id;
        utilLib_1.default.checkMissingFieldsAndType({ _id }, { name: "string" });
        let data = yield db_1.section.getSection({ _id });
        res.status(200).json({ data, message: "" });
    }
    catch (error) {
        //@ts-ignore
        res.status(400).json({ message: error.message });
    }
});
exports.getSection = getSection;
const createSection = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        utilLib_1.default.checkMissingFieldsAndType(Object.assign({}, req.body), { section_name: "string", batch_name: "string" });
        let data = yield db_1.section.createSection(Object.assign({}, req.body));
        res.status(200).json({ data, message: "Section Created Successfully" });
    }
    catch (error) {
        //@ts-ignore
        res.status(400).json({ message: error.message });
    }
});
exports.createSection = createSection;
const createMany = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { sections } = req.body;
        utilLib_1.default.checkMissingFieldsAndType({ sections }, { sections: "object" });
        let data = yield db_1.section.createMany({ sections });
        res.status(200).json({ data, message: "" });
    }
    catch (error) {
        //@ts-ignore
        res.status(400).json({ message: error.message });
    }
});
exports.createMany = createMany;
const removeAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = yield db_1.section.removeAll({});
        res.status(200).json({ data, message: "Deleted Successfully" });
    }
    catch (error) {
        //@ts-ignore
        res.status(400).json({ message: error.message });
    }
});
exports.removeAll = removeAll;
const addTeacher = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        utilLib_1.default.checkMissingFieldsAndType(Object.assign({}, req.body), {
            _id: "string",
            subject_color: "string",
            subject: "string",
            teacher_info: "string",
        });
        let data = yield db_1.section.addTeacher(Object.assign({}, req.body));
        res.status(200).json({ data, message: "Teacher Added Successfully" });
    }
    catch (error) {
        //@ts-ignore
        res.status(400).json({ message: error.message });
    }
});
exports.addTeacher = addTeacher;
const removeTeacher = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        utilLib_1.default.checkMissingFieldsAndType(Object.assign({}, req.body), { _id: "string", teacher_info: "string" });
        let data = yield db_1.section.removeTeacher(Object.assign({}, req.body));
        res.status(200).json({ data, message: "Teacher Removed Successfully" });
    }
    catch (error) {
        //@ts-ignore
        res.status(400).json({ message: error.message });
    }
});
exports.removeTeacher = removeTeacher;
const addClass = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        utilLib_1.default.checkMissingFieldsAndType(Object.assign({}, req.body), {
            _id: "string",
            heading: "string",
            sub_heading: "string",
            start_time: "string",
            end_time: "string",
            subject: "string",
            teacher_id: "string",
            description: "string",
        });
        let data = yield db_1.section.addClass(Object.assign({}, req.body));
        res.status(200).json({ data, message: "Class Added Successfully" });
    }
    catch (error) {
        //@ts-ignore
        res.status(400).json({ message: error.message });
    }
});
exports.addClass = addClass;
const removeClass = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        utilLib_1.default.checkMissingFieldsAndType(Object.assign({}, req.body), {
            _id: "string",
            class_id: "string",
        });
        let data = yield db_1.section.removeClass(Object.assign({}, req.body));
        res.status(200).json({ data, message: "Class removed Successfully" });
    }
    catch (error) {
        //@ts-ignore
        res.status(400).json({ message: error.message });
    }
});
exports.removeClass = removeClass;
