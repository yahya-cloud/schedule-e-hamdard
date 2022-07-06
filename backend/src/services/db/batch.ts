import { BatchModel } from "../../models";
import { StringObject } from "../../types";

const getBatches = async () => {
  let result = await BatchModel.find({}, { name: 1 }).lean();
  return result;
};

const getBatch = async (dataObj: StringObject) => {
  let { _id } = dataObj;
  let result = await BatchModel.findOne({ _id })
    .populate({ path: "sections", options: { select: "info" } })
    .lean();
  return result;
};

const createBatch = async (dataObj: StringObject) => {
  let newBatch = new BatchModel(dataObj);
  let result = await newBatch.save();
  return result;
};

const addSection = async (dataObj: StringObject) => {
  let { _id, section } = dataObj;
  let result = await BatchModel.findOneAndUpdate(
    { _id: _id },
    { $push: { section } },
    {
      new: true,
      useFindAndModify: false,
    },
  )
    .populate({ path: "sections", options: { select: "info" } })
    .lean();
  return result;
};

const removeAll = async (dataObj: StringObject) => {
  let result = await BatchModel.deleteMany(dataObj);
  return result;
};

export { getBatches, createBatch, addSection, removeAll, getBatch };
