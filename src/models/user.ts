import { Schema, model } from "mongoose";
import { UserSchemaType } from "../types";
import { schemaConstants as propType } from "../libs/constants";

const UserSchema = new Schema<UserSchemaType>(
  {
    name: propType.string,
    email: propType.email,
    phone_number: propType.phone,
    password: { ...propType.string },
    user_type: { ...propType.string, enum: ["teacher", "admin", "student"] },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const UserModel = model<UserSchemaType>("User", UserSchema);

export default UserModel;
