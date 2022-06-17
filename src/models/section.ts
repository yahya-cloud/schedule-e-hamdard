import { Schema, model } from "mongoose";
import {
  SectionSchemaType,
  SectionInfoSchemaType,
  TeacherInfoSchemaType,
  TimeTableSchemaType,
} from "../types";
import { schemaConstants as propType } from "../libs/constants";

//sub schemas
const SectionInfoSchema = new Schema<SectionInfoSchemaType>({
  section: propType.string,
  batch_name: propType.string,
});

const TeacherInfoSchema = new Schema<TeacherInfoSchemaType>({
  subject_color: propType.string,
  subject: propType.string,
  teacher_info: { type: Schema.Types.ObjectId, ref: "Staff", default: null },
});

const TimeTableSchema = new Schema<TimeTableSchemaType>({
  subject_color: propType.string,
  heading: propType.string,
  sub_heading: propType.string,
  start_time: propType.date,
  end_time: propType.date,
  subject: propType.string,
  teacher_id: propType.string,
});

//main schema
const SectionSchema = new Schema<SectionSchemaType>({
  info: { type: SectionInfoSchema, required: true },
  teachers: [TeacherInfoSchema],
  time_table: [TimeTableSchema],
});

SectionSchema.virtual("students", {
  ref: "Student",
  localField: "_id",
  foreignField: "section",
});

const SectionModel = model<SectionSchemaType>("Section", SectionSchema);

//db calls
export const getSections = async (findQuery: object, filter = {}) => {
  let result = await SectionModel.find(findQuery, { ...filter }).lean();
  return result;
};

export const getSection = async (findQuery: object, filter = {}) => {
  let result = await SectionModel.find(findQuery, { ...filter })
    .populate("students")
    .lean();
  return result;
};

export const createSection = async (dataObj: object) => {
  let newSection = new SectionModel(dataObj);
  let result = await newSection.save();
  return result;
};

export const createMany = async (dataObj: object) => {
  let result = await SectionModel.insertMany(dataObj);
  return result;
};

export const removeAll = async () => {
  let result = await SectionModel.deleteMany({});
  return result;
};

export const addTeacher = async (findQuery: object, updateQuery: object) => {
  let result = await SectionModel.findOneAndUpdate(
    findQuery,
    { $push: { teachers: updateQuery } },
    {
      new: true,
      useFindAndModify: false,
    }
  );
  return result;
};

export const removeTeacher = async (findQuery: object, updateQuery: object) => {
  console.log(updateQuery);
  let result = await SectionModel.findOneAndUpdate(
    findQuery,
    { $pull: { teachers: { ...updateQuery } } },
    {
      new: true,
      useFindAndModify: false,
    }
  );
  return result;
};

export const addClass = async (findQuery: object, updateQuery: object) => {
  let result = await SectionModel.findOneAndUpdate(
    findQuery,
    { $push: { time_table: updateQuery } },
    {
      new: true,
      useFindAndModify: false,
    }
  );
  return result;
};

export const removeClass = async (findQuery: object, updateQuery: object) => {
  console.log(updateQuery);
  let result = await SectionModel.findOneAndUpdate(
    findQuery,
    { $pull: { time_table: { ...updateQuery } } },
    {
      new: true,
      useFindAndModify: false,
    }
  );
  return result;
};
