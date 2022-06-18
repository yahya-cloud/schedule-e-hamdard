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

//populating students virtually
SectionSchema.virtual("students", {
  ref: "Student",
  localField: "_id",
  foreignField: "section",
});

const SectionModel = model<SectionSchemaType>("Section", SectionSchema);

export default SectionModel;
