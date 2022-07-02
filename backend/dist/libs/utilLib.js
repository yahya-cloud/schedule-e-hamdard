"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nanoid_1 = require("nanoid");
const constants_1 = require("./constants");
let compareStrings = function (str1, str2) {
    return str1 === str2 ? true : false;
};
let getCode = (string, size, fixed) => {
    const nanoid = (0, nanoid_1.customAlphabet)(string, size);
    return `${fixed.toLowerCase()}${nanoid()}`;
};
let isEmpty = (data) => {
    if (data === undefined || data === null || data === "") {
        return true;
    }
    else {
        return false;
    }
}; // end of isEmpty.
let checkMissingFields = (fields) => {
    for (let field in fields) {
        if (isEmpty(fields[field])) {
            throw { message: `missing field : ${field}` };
        }
    }
};
let checkMissingFieldsAndType = (fields, types = {}) => {
    for (let field in fields) {
        if (isEmpty(fields[field])) {
            throw { message: `missing field : ${field}` };
        }
        if (types[field] && typeof fields[field] !== types[field])
            throw {
                message: `Type of ${field} expected : "${types[field]}", got : "${typeof fields[field]}"`,
            };
    }
};
const deleteObjectKey = (object, keyArr) => {
    let updatedObject = Object.assign({}, object);
    keyArr.forEach((key) => {
        delete updatedObject[key];
    });
    return updatedObject;
};
//check to bypass middleware
const byPass = (url) => {
    if (constants_1.constants.BY_PASS_REQUESTS.indexOf(url) > -1) {
        return true;
    }
    return false;
};
//check if request is to Create, Update, or Delete
//CUD(create, update, delete)
const isCUD = (method) => {
    if (constants_1.constants.CHANGE_REQUEST_TYPES.indexOf(method) > -1) {
        return true;
    }
    return false;
};
/**
 * util function to return body response.
 * params: statusCode, message, data.
 */
let responseBody = (statusCode = 400, message = null, data = null, success = true) => {
    if (statusCode === 400 && !message)
        message = constants_1.constants.BAD_REQUEST;
    return {
        statusCode,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({
            success,
            message,
            data,
        }),
    };
}; // end responseBody function.
exports.default = {
    getCode,
    isEmpty,
    responseBody,
    checkMissingFields,
    checkMissingFieldsAndType,
    compareStrings,
    byPass,
    isCUD,
    deleteObjectKey,
};
