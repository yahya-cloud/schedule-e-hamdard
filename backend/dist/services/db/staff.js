"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.deleteStaffMember = exports.getStaffMember = exports.getStaff = exports.removeAll = exports.createMany = exports.editStaffMember = exports.createStaff = void 0;
const constants_1 = require("../../libs/constants");
const utilLib_1 = __importDefault(require("../../libs/utilLib"));
const authLib = __importStar(require("../../libs/authLib"));
const models_1 = require("../../models");
const createStaff = (dataObj) => __awaiter(void 0, void 0, void 0, function* () {
    let { name } = dataObj;
    let unique_id = utilLib_1.default.getCode(constants_1.constants.NUMBER_STRING, 5, name);
    let password = yield authLib.generatePassword();
    let finalObj = Object.assign(Object.assign({}, dataObj), { unique_id, password });
    let newStaff = new models_1.StaffModel(finalObj);
    let result = yield newStaff.save();
    return result;
});
exports.createStaff = createStaff;
const getStaff = (dataObj) => __awaiter(void 0, void 0, void 0, function* () {
    let filter = dataObj.userType === "admin" ? {} : { password: 0 };
    let result = yield models_1.StaffModel.find({}, Object.assign({}, filter)).lean();
    return result;
});
exports.getStaff = getStaff;
const getStaffMember = (dataObj) => __awaiter(void 0, void 0, void 0, function* () {
    let { _id } = dataObj;
    let result = yield models_1.StaffModel.findOne({ _id: _id })
        .populate({
        path: "sections",
        options: { select: "time_table info " },
    })
        .lean();
    return result;
});
exports.getStaffMember = getStaffMember;
const createMany = (dataObj) => __awaiter(void 0, void 0, void 0, function* () {
    let staffArray = yield Promise.all(dataObj.staffArray.map((el) => __awaiter(void 0, void 0, void 0, function* () {
        return Object.assign(Object.assign({}, el), { unique_id: utilLib_1.default.getCode(constants_1.constants.NUMBER_STRING, 5, el.name), password: yield authLib.generatePassword() });
    })));
    let result = yield models_1.StaffModel.insertMany(staffArray);
    return result;
});
exports.createMany = createMany;
const removeAll = (dataObj) => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield models_1.StaffModel.deleteMany(dataObj);
    return result;
});
exports.removeAll = removeAll;
const editStaffMember = (dataObj) => __awaiter(void 0, void 0, void 0, function* () {
    let { _id } = dataObj;
    let result = yield models_1.StaffModel.findOneAndUpdate({ _id: _id }, Object.assign({}, dataObj), {
        new: true,
        useFindAndModify: false,
    });
    return result;
});
exports.editStaffMember = editStaffMember;
const deleteStaffMember = (dataObj) => __awaiter(void 0, void 0, void 0, function* () {
    let { _id } = dataObj;
    let result = yield models_1.StaffModel.findOneAndDelete({ _id: _id }, {
        new: true,
        useFindAndModify: false,
    });
    return result;
});
exports.deleteStaffMember = deleteStaffMember;
