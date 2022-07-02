import { Schema, model } from "mongoose";
import { BatchSchemaType } from "../types";
import { schemaConstants as propType } from "../libs/constants";

const BatchSchema = new Schema<BatchSchemaType>({
  name: propType.uniqueField,
});

//populating sections virtually bitches
BatchSchema.virtual("sections", {
  ref: "Section",
  localField: "name",
  foreignField: "info.batch_name",
});

const BatchModel = model<BatchSchemaType>("Batch", BatchSchema);

export default BatchModel;
