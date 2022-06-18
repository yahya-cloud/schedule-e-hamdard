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

export default Staff;
