import * as authLib from "../../libs/authLib";
import utilLib from "../../libs/utilLib";
import { StudentModel } from "../../models";
import { StudentSchemaType, StringObject } from "../../types";

const createStudent = async (dataObj: StringObject) => {
  let isValidEn_Number = authLib.isValidEn_Number(dataObj.en_number);
  if (!isValidEn_Number) {
    throw new Error("Invalid Enrollment Number");
  }
  let password: string = await authLib.generatePassword();
  let newStudent = new StudentModel({ ...dataObj, password });
  let result = await newStudent.save();
  let userToReturn = utilLib.deleteObjectKey({ ...result.toObject() }, ["id"]);
  return userToReturn;
};

const getStudents = async (dataObj: StringObject) => {
  let filter = dataObj.userType === "admin" ? {} : { password: 0 };
  let result = await StudentModel.find({}, { ...filter }).lean();
  return result;
};

const getStudent = async (dataObj: StringObject) => {
  let { _id } = dataObj;
  let result = await StudentModel.find({ _id }, { password: 0 })
    .populate({
      path: "section",
    })
    .lean();
  return result;
};

const createMany = async (dataObj: StringObject) => {
  let studentsArray: Array<StudentSchemaType> = await Promise.all(
    dataObj.studentsArray.map(async (el: StringObject) => {
      return {
        ...el,
        password: await authLib.generatePassword(),
      };
    }),
  );
  let result = await StudentModel.insertMany(studentsArray);
  return result;
};

const removeAll = async (dataObj: StringObject) => {
  let result = await StudentModel.deleteMany(dataObj);
  return result;
};

const editStudent = async (dataObj: StringObject) => {
  let { _id } = dataObj;

  let result = await StudentModel.findOneAndUpdate(
    { _id: _id },
    { ...dataObj },
    {
      new: true,
      useFindAndModify: false,
    },
  );
  return result;
};

const deleteStudent = async (dataObj: StringObject) => {
  let { _id } = dataObj;
  let result = await StudentModel.findOneAndDelete(
    { _id: _id },
    {
      new: true,
      useFindAndModify: false,
    },
  );
  return result;
};

export {
  createStudent,
  deleteStudent,
  editStudent,
  removeAll,
  getStudents,
  createMany,
  getStudent,
};
