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

export default Student;
