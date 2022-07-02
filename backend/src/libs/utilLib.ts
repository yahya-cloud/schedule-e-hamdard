import { customAlphabet } from "nanoid";
import { UnknowObj } from "../types";
import { constants } from "./constants";

let compareStrings = function (str1: string, str2: string) {
  return str1 === str2 ? true : false;
};

let getCode = (string: string, size: number, fixed: string) => {
  const nanoid = customAlphabet(string, size);
  return `${fixed.toLowerCase()}${nanoid()}`;
};

let isEmpty = (data: any) => {
  if (data === undefined || data === null || data === "") {
    return true;
  } else {
    return false;
  }
}; // end of isEmpty.

let checkMissingFields = (fields: UnknowObj) => {
  for (let field in fields) {
    if (isEmpty(fields[field])) {
      throw { message: `missing field : ${field}` };
    }
  }
};

let checkMissingFieldsAndType = (fields: UnknowObj, types: UnknowObj = {}) => {
  for (let field in fields) {
    if (isEmpty(fields[field])) {
      throw { message: `missing field : ${field}` };
    }

    if (types[field] && typeof fields[field] !== types[field])
      throw {
        message: `Type of ${field} expected : "${
          types[field]
        }", got : "${typeof fields[field]}"`,
      };
  }
};

const deleteObjectKey = (object: UnknowObj, keyArr: string[]) => {
  let updatedObject = { ...object };
  keyArr.forEach((key) => {
    delete updatedObject[key];
  });
  return updatedObject;
};

//check to bypass middleware
const byPass = (url: string) => {
  if (constants.BY_PASS_REQUESTS.indexOf(url) > -1) {
    return true;
  }
  return false;
};

//check if request is to Create, Update, or Delete
//CUD(create, update, delete)
const isCUD = (method: string) => {
  if (constants.CHANGE_REQUEST_TYPES.indexOf(method) > -1) {
    return true;
  }
  return false;
};

/**
 * util function to return body response.
 * params: statusCode, message, data.
 */
let responseBody = (
  statusCode: number = 400,
  message: null | string = null,
  data: any = null,
  success: boolean = true,
) => {
  if (statusCode === 400 && !message) message = constants.BAD_REQUEST;

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

export default {
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
