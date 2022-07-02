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
exports.getBatch = exports.removeAll = exports.addSection = exports.createBatch = exports.getBatches = void 0;
const utilLib_1 = __importDefault(require("../libs/utilLib"));
const db_1 = require("../services/db");
const getBatches = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = yield db_1.batch.getBatches();
        res.status(200).json({ data, message: "" });
    }
    catch (error) {
        res.status(400).json({ message: error });
    }
});
exports.getBatches = getBatches;
const getBatch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let _id = req.params.id;
        utilLib_1.default.checkMissingFieldsAndType({ _id }, { _id: "string" });
        let data = yield db_1.batch.getBatch({ _id });
        res.status(200).json({ data, message: "" });
    }
    catch (error) {
        //@ts-ignore
        res.status(400).json({ message: error.message });
    }
});
exports.getBatch = getBatch;
const createBatch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { name } = req.body;
        utilLib_1.default.checkMissingFieldsAndType({ name }, { name: "string" });
        let data = yield db_1.batch.createBatch(req.body);
        res.status(200).json({
            data,
            message: "Batch Created Successfully",
        });
    }
    catch (error) {
        //@ts-ignore
        res.status(400).json({ message: error.message });
    }
});
exports.createBatch = createBatch;
const addSection = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id, section } = req.body;
        utilLib_1.default.checkMissingFieldsAndType({ _id, section }, { _id: "string", section: "string" });
        let data = yield db_1.batch.addSection({ _id, section });
        res.status(200).json({
            data,
            message: "Section Added Successfully",
        });
    }
    catch (error) {
        //@ts-ignore
        res.status(400).json({ message: error.message });
    }
});
exports.addSection = addSection;
const removeAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = yield db_1.batch.removeAll({});
        res.status(200).json({ data, message: "" });
    }
    catch (error) {
        res.status(400).json({ message: error });
    }
});
exports.removeAll = removeAll;
