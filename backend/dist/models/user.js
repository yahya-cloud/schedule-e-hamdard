"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const constants_1 = require("../libs/constants");
const UserSchema = new mongoose_1.Schema({
    name: constants_1.schemaConstants.string,
    email: constants_1.schemaConstants.email,
    phone_number: constants_1.schemaConstants.phone,
    password: Object.assign({}, constants_1.schemaConstants.string),
    user_type: Object.assign(Object.assign({}, constants_1.schemaConstants.string), { enum: ["teacher", "admin", "student"] }),
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});
const UserModel = (0, mongoose_1.model)("User", UserSchema);
exports.default = UserModel;
