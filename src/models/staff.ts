import { Schema, model } from "mongoose";
import { StaffSchemaType } from "../types";
import { schemaConstants as propType } from "../libs/constants";
import UserModel from "./user";

const StaffSchema = new Schema<StaffSchemaType>({
  photo: propType.string,
  unique_id: propType.uniqueField,
});

StaffSchema.virtual("sections", {
  ref: "Section",
  localField: "_id",
  foreignField: "teachers.teacher_info",
});

export const Staff = UserModel.discriminator<StaffSchemaType>(
  "Staff",
  StaffSchema
);

//db calls
export const createStaff = async (dataObj: any) => {
  let newStaff = new Staff(dataObj);
  let result = await newStaff.save();
  return result;
};

export const getStaff = async (findQuery: any, filter = {}) => {
  let result = await Staff.find(findQuery, { ...filter }).lean();
  return result;
};

export const getStaffMember = async (findQuery: any, filter = {}) => {
  let result = await Staff.find(findQuery, { ...filter })
    .populate({
      path: "sections",
      options: { select: "time_table info " },
    })
    .lean();
  return result;
};

export const createMany = async (dataObj: any) => {
  let result = await Staff.insertMany(dataObj);
  return result;
};

export const removeAll = async (dataObj: any) => {
  let result = await Staff.deleteMany(dataObj);
  return result;
};

export const editStaffMember = async (
  findQuery: object,
  updateQuery: object
) => {
  let result = await Staff.findOneAndUpdate(findQuery, updateQuery, {
    new: true,
    useFindAndModify: false,
  });
  return result;
};

export const deleteStaffMember = async (findQuery: object) => {
  let result = await Staff.findOneAndDelete(findQuery, {
    new: true,
    useFindAndModify: false,
  });
  return result;
};
