import { Schema, model } from "mongoose";
import { BatchSchemaType } from "../types";
import { schemaConstants as propType } from "../libs/constants";

const BatchSchema = new Schema<BatchSchemaType>({
  name: propType.uniqueField,
  sections: [{ type: Schema.Types.ObjectId, ref: "Section" }],
});

const BatchModel = model<BatchSchemaType>("Batch", BatchSchema);

//db calls
export const getBatches = async (findQuery: any, filter = {}) => {
  let result = await BatchModel.find(findQuery, { ...filter })
    .populate({ path: "sections", options: { select: "info" } })
    .lean();
  return result;
};

export const createBatch = async (dataObj: any) => {
  let newBatch = new BatchModel(dataObj);
  let result = await newBatch.save();
  return result;
};

export const updateBatch = async (findQuery: any, updateQuery: any) => {
  let result = await BatchModel.findOneAndUpdate(findQuery, updateQuery, {
    new: true,
    useFindAndModify: false,
  })
    .populate({ path: "sections", options: { select: "info" } })
    .lean();
  return result;
};

export const removeAll = async (dataObj: any) => {
  let result = await BatchModel.deleteMany(dataObj);
  return result;
};
