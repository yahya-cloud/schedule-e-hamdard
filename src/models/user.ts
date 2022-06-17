import { Schema, model } from "mongoose";
import { UserSchemaType } from "../types";
import { schemaConstants as propType } from "../libs/constants";

const UserSchema = new Schema<UserSchemaType>(
  {
    name: propType.string,
    email: propType.email,
    phone_number: propType.phone,
    password: { type: String },
    user_type: { ...propType.string, enum: ["teacher", "admin", "student"] },
  },
  {
    toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
    toObject: { virtuals: true }, // So `console.log()` and other functions that use `toObject()` include virtuals
  }
);

const UserModel = model<UserSchemaType>("User", UserSchema);

export const getUsers = async (findQuery: any, filter = {}) => {
  let result = await UserModel.find(findQuery, { ...filter }).lean();
  return result;
};

export const getUser = async (findQuery: any, filter = {}) => {
  let result = await UserModel.findOne(findQuery, { ...filter });
  return result;
};

export const login = async (findQuery: any, filter = {}) => {
  let result = await UserModel.findOne({ $or: [...findQuery] }, { ...filter });
  return result;
};

export const createAdmin = async (dataObj: any) => {
  let admin = new UserModel(dataObj);
  let result = admin.save();
  return result;
};

export const createMany = async (dataObj: any) => {
  let result = await UserModel.insertMany(dataObj);
  return result;
};

export const removeAll = async (dataObj: any) => {
  let result = await UserModel.deleteMany(dataObj);
  return result;
};

export default UserModel;
