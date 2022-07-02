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
	section_name: propType.string,
	batch_name: propType.string,
});

const TeacherInfoSchema = new Schema<TeacherInfoSchemaType>({
	subject_color: propType.string,
	subject: propType.string,
	teacher_info: { type: Schema.Types.ObjectId, ref: "Staff", default: null },
});

const TimeTableSchema = new Schema<TimeTableSchemaType>({
	subject_color: propType.string,
	title: propType.string,
	start: propType.date,
	end: propType.date,
	description: propType.string,
	teacher_info: { type: Schema.Types.ObjectId, ref: "Staff", default: null },
});

//main schema
const SectionSchema = new Schema<SectionSchemaType>({
	info: { type: SectionInfoSchema, required: true },
	time_table: [TimeTableSchema],
	teachers: [TeacherInfoSchema],
});

//populating students virtually
SectionSchema.virtual("students", {
	ref: "Student",
	localField: "_id",
	foreignField: "section",
});

const SectionModel = model<SectionSchemaType>("Section", SectionSchema);

export default SectionModel;

//to prevent 2 db calls at time of adding student
//section_id(section) is been stored student schema
//and section virtually populates students
