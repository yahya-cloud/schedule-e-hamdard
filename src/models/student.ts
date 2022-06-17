import { Schema, model } from "mongoose";
import { StudentSchemaType } from "../types";
import { schemaConstants as propType } from "../libs/constants";
import UserModel from "./user";

const StudentSchema = new Schema<StudentSchemaType>({
  //enrollment number
  en_number: propType.uniqueField,
  section: { type: Schema.Types.ObjectId, ref: "Section", default: null },
});

const Student = UserModel.discriminator<StudentSchemaType>(
  "Student",
  StudentSchema
);

//db calls
export const createStudent = async (dataObj: object) => {
  let newStudent = new Student(dataObj);
  let result = await newStudent.save();
  return result;
};

export const getStudents = async (findQuery: object, filter = {}) => {
  let result = await Student.find(findQuery, { ...filter }).lean();
  return result;
};

export const getStudent = async (findQuery: object, filter = {}) => {
  let result = await Student.find(findQuery, { ...filter })
    .populate({
      path: "section",
      select: "time_table info",
    })
    .lean();
  return result;
};

export const createMany = async (dataObj: object) => {
  let result = await Student.insertMany(dataObj);
  return result;
};

export const removeAll = async (dataObj: object) => {
  let result = await Student.deleteMany(dataObj);
  return result;
};

export const editStudent = async (findQuery: object, updateQuery: object) => {
  let result = await Student.findOneAndUpdate(findQuery, updateQuery, {
    new: true,
    useFindAndModify: false,
  });
  return result;
};

export const deleteStudent = async (findQuery: object) => {
  let result = await Student.findOneAndDelete(findQuery, {
    new: true,
    useFindAndModify: false,
  });
  return result;
};
