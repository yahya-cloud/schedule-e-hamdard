import { Schema, model } from "mongoose";
import { BatchSchemaType } from "../types";
import { schemaConstants as propType } from "../libs/constants";

const BatchSchema = new Schema<BatchSchemaType>({
  name: propType.uniqueField,
  sections: [{ type: Schema.Types.ObjectId, ref: "Section" }],
});

const BatchModel = model<BatchSchemaType>("Batch", BatchSchema);

export default BatchModel;
