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
exports.getBatch = exports.removeAll = exports.addSection = exports.createBatch = exports.getBatches = void 0;
const models_1 = require("../../models");
const getBatches = () => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield models_1.BatchModel.find({}, { name: 1 }).lean();
    return result;
});
exports.getBatches = getBatches;
const getBatch = (dataObj) => __awaiter(void 0, void 0, void 0, function* () {
    let { _id } = dataObj;
    let result = yield models_1.BatchModel.findOne({ _id })
        .populate({ path: "sections", options: { select: "info" } })
        .lean();
    return result;
});
exports.getBatch = getBatch;
const createBatch = (dataObj) => __awaiter(void 0, void 0, void 0, function* () {
    let newBatch = new models_1.BatchModel(dataObj);
    let result = yield newBatch.save();
    return result;
});
exports.createBatch = createBatch;
const addSection = (dataObj) => __awaiter(void 0, void 0, void 0, function* () {
    let { _id, section } = dataObj;
    let result = yield models_1.BatchModel.findOneAndUpdate({ _id: _id }, { $push: { section } }, {
        new: true,
        useFindAndModify: false,
    })
        .populate({ path: "sections", options: { select: "info" } })
        .lean();
    return result;
});
exports.addSection = addSection;
const removeAll = (dataObj) => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield models_1.BatchModel.deleteMany(dataObj);
    return result;
});
exports.removeAll = removeAll;
