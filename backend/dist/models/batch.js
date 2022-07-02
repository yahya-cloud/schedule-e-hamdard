"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const constants_1 = require("../libs/constants");
const BatchSchema = new mongoose_1.Schema({
    name: constants_1.schemaConstants.uniqueField,
});
//populating sections virtually bitches
BatchSchema.virtual("sections", {
    ref: "Section",
    localField: "name",
    foreignField: "info.batch_name",
});
const BatchModel = (0, mongoose_1.model)("Batch", BatchSchema);
exports.default = BatchModel;
