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
exports.getStudent = exports.createMany = exports.getStudents = exports.removeAll = exports.editStudent = exports.removeStudent = exports.createStudent = void 0;
const db_1 = require("../services/db");
const utilLib_1 = __importDefault(require("../libs/utilLib"));
const getStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let userType = req.user.user_type;
        let data = yield db_1.student.getStudents({ userType });
        res.status(200).json({ data, message: "" });
    }
    catch (error) {
        //@ts-ignore
        res.status(400).json({ message: error.message });
    }
});
exports.getStudents = getStudents;
const getStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let _id = req.params.id;
        utilLib_1.default.checkMissingFieldsAndType({ _id }, { _id: "string" });
        let data = yield db_1.student.getStudent({ _id });
        res.status(200).json({ data, message: "" });
    }
    catch (error) {
        //@ts-ignore
        res.status(400).json({ message: error.message });
    }
});
exports.getStudent = getStudent;
const createStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        utilLib_1.default.checkMissingFieldsAndType(Object.assign({}, req.body), {
            name: "string",
            photo: "string",
            email: "string",
            phone_number: "number",
            user_type: "string",
        });
        const data = yield db_1.student.createStudent(Object.assign({}, req.body));
        res.status(200).json({ data, message: "Student Added Successfully" });
    }
    catch (error) {
        //@ts-ignore
        res.status(400).json({ message: error.message });
    }
});
exports.createStudent = createStudent;
const createMany = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let studentsArray = req.body;
        studentsArray.forEach((person) => {
            utilLib_1.default.checkMissingFieldsAndType(Object.assign({}, person), {
                name: "string",
                email: "string",
                phone_number: "number",
                en_number: "string",
                user_type: "string",
                section: "string",
            });
        });
        const data = yield db_1.student.createMany({ studentsArray });
        res.status(200).json({ data, message: "Students Added Successfully" });
    }
    catch (error) {
        //@ts-ignore
        res.status(400).json({ message: error.message });
    }
});
exports.createMany = createMany;
const removeAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = yield db_1.student.removeAll({});
        res.status(200).json({ data, message: "students Removed Successfully" });
    }
    catch (error) {
        //@ts-ignore
        res.status(400).json({ message: error.message });
    }
});
exports.removeAll = removeAll;
const editStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        utilLib_1.default.checkMissingFieldsAndType(Object.assign({}, req.body), {
            name: "string",
            email: "string",
            phone_number: "number",
            en_number: "string",
            user_type: "string",
            section: "string",
        });
        let data = yield db_1.student.editStudent(Object.assign({}, req.body));
        res.status(200).json({ data, message: "Student Updated Successfully" });
    }
    catch (error) {
        //@ts-ignore
        res.status(400).json({ message: error.message });
    }
});
exports.editStudent = editStudent;
const removeStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let _id = req.params.id;
        utilLib_1.default.checkMissingFieldsAndType({ _id }, { _id: "string" });
        let data = yield db_1.student.deleteStudent({ _id });
        res.status(200).json(data);
    }
    catch (error) {
        //@ts-ignore
        res.status(400).json({ message: error.message });
    }
});
exports.removeStudent = removeStudent;
