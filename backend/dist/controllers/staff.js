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
exports.removeStaffMember = exports.getStaff = exports.getStaffMember = exports.createMany = exports.removeAll = exports.editStaffMember = exports.createStaff = void 0;
const db_1 = require("../services/db");
const utilLib_1 = __importDefault(require("../libs/utilLib"));
const createStaff = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        utilLib_1.default.checkMissingFieldsAndType(Object.assign({}, req.body), {
            name: "string",
            photo: "string",
            email: "string",
            phone_number: "number",
            user_type: "string",
        });
        let data = yield db_1.staff.createStaff(Object.assign({}, req.body));
        res.status(200).json({ data, message: "Staff Created Successfully" });
    }
    catch (error) {
        //@ts-ignore
        res.status(400).json({ message: error.message });
    }
});
exports.createStaff = createStaff;
const getStaff = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let userType = req.user.user_type;
        let data = yield db_1.staff.getStaff({ userType });
        res.status(200).json({ data, message: "" });
    }
    catch (error) {
        //@ts-ignore
        res.status(400).json({ message: error.message });
    }
});
exports.getStaff = getStaff;
const getStaffMember = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let _id = req.params.id;
        utilLib_1.default.checkMissingFieldsAndType({ _id }, { _id: "string" });
        let data = yield db_1.staff.getStaffMember({ _id });
        res.status(200).json({ data, message: "Member found" });
    }
    catch (error) {
        //@ts-ignore
        res.status(400).json({ message: error.message });
    }
});
exports.getStaffMember = getStaffMember;
const createMany = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let staffArray = req.body;
        staffArray.forEach((staff) => {
            utilLib_1.default.checkMissingFieldsAndType(Object.assign({}, staff), {
                photo: "string",
                _id: "string",
                name: "string",
                email: "string",
                phone_number: "number",
                user_type: "string",
            });
        });
        let data = yield db_1.staff.createMany({ staffArray });
        res.status(200).json({ data, message: "Added Staff Successfully" });
    }
    catch (error) {
        //@ts-ignore
        res.status(400).json({ message: error.message });
    }
});
exports.createMany = createMany;
const removeAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = yield db_1.staff.removeAll({});
        res.status(200).json({ data, message: "Removed successfully" });
    }
    catch (error) {
        //@ts-ignore
        res.status(400).json({ message: error.message });
    }
});
exports.removeAll = removeAll;
const editStaffMember = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        utilLib_1.default.checkMissingFieldsAndType(Object.assign({}, req.body), {
            photo: "string",
            _id: "string",
            name: "string",
            email: "string",
            phone_number: "number",
            user_type: "string",
        });
        let data = yield db_1.staff.editStaffMember(Object.assign({}, req.body));
        res.status(200).json({ data, message: "User Updated Successfully" });
    }
    catch (error) {
        //@ts-ignore
        res.status(400).json({ message: error.message });
    }
});
exports.editStaffMember = editStaffMember;
const removeStaffMember = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let _id = req.params.id;
        utilLib_1.default.checkMissingFieldsAndType({ _id }, { _id: "string" });
        let data = yield db_1.staff.deleteStaffMember({ _id });
        res.status(200).json({ data, message: "Message Deleted Successfully" });
    }
    catch (error) {
        //@ts-ignore
        res.status(400).json({ message: error.message });
    }
});
exports.removeStaffMember = removeStaffMember;
