import { BatchModel } from "../../models";
import { UnknowObj } from "../../types";

const getBatches = async () => {
  let result = await BatchModel.find({})
    .populate({ path: "sections", options: { select: "info" } })
    .lean();
  return result;
};

const createBatch = async (dataObj: UnknowObj) => {
  let newBatch = new BatchModel(dataObj);
  let result = await newBatch.save();
  return result;
};

const addSection = async (dataObj: UnknowObj) => {
  let { _id, section } = dataObj;
  let result = await BatchModel.findOneAndUpdate(
    { _id },
    { $push: { section } },
    {
      new: true,
      useFindAndModify: false,
    }
  )
    .populate({ path: "sections", options: { select: "info" } })
    .lean();
  return result;
};

const removeAll = async (dataObj: UnknowObj) => {
  let result = await BatchModel.deleteMany(dataObj);
  return result;
};

export { getBatches, createBatch, addSection, removeAll };
