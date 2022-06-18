import { SectionModel } from "../../models";
import { UnknowObj } from "../../types";

const getSections = async (dataObj: UnknowObj) => {
  let result = await SectionModel.find(dataObj).lean();
  return result;
};

const getSection = async (dataObj: UnknowObj) => {
  let { _id } = dataObj;
  let result = await SectionModel.find({ _id }).populate("students").lean();
  return result;
};

const createSection = async (dataObj: UnknowObj) => {
  const { section_name, batch_name } = dataObj;
  let info = { section_name, batch_name };
  let newSection = new SectionModel({ info });
  let result = await newSection.save();
  return result;
};

const createMany = async (dataObj: UnknowObj) => {
  let { sections } = dataObj;
  let result = await SectionModel.insertMany(sections);
  return result;
};

const removeAll = async (dataObj: UnknowObj) => {
  let result = await SectionModel.deleteMany(dataObj);
  return result;
};

const addTeacher = async (dataObj: UnknowObj) => {
  let { _id, subject_color, subject, teacher_info } = dataObj;
  let teacher = { subject_color, subject, teacher_info };

  let result = await SectionModel.findOneAndUpdate(
    _id,
    { $push: { teachers: teacher } },
    {
      new: true,
      useFindAndModify: false,
    }
  );
  return result;
};

const removeTeacher = async (dataObj: UnknowObj) => {
  let { _id, teacher_info } = dataObj;
  let result = await SectionModel.findOneAndUpdate(
    _id,
    { $pull: { teachers: { teacher_info } } },
    {
      new: true,
      useFindAndModify: false,
    }
  );
  return result;
};

const addClass = async (dataObj: UnknowObj) => {
  let { _id, heading, sub_heading, start_time, end_time, subject, teacher_id } =
    dataObj;

  let schedule = {
    heading,
    sub_heading,
    start_time,
    end_time,
    subject,
    teacher_id,
  };

  let result = await SectionModel.findOneAndUpdate(
    _id,
    { $push: { time_table: schedule } },
    {
      new: true,
      useFindAndModify: false,
    }
  );
  return result;
};

const removeClass = async (dataObj: UnknowObj) => {
  let { _id, class_id } = dataObj;
  let schedule = { _id: class_id };
  let result = await SectionModel.findOneAndUpdate(
    _id,
    { $pull: { time_table: schedule } },
    {
      new: true,
      useFindAndModify: false,
    }
  );
  return result;
};

export {
  getSections,
  getSection,
  createSection,
  addTeacher,
  createMany,
  removeAll,
  removeTeacher,
  addClass,
  removeClass,
};
