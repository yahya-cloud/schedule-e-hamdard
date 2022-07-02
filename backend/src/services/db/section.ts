import { SectionModel } from "../../models";
import { UnknowObj } from "../../types";

const getSections = async (dataObj: UnknowObj) => {
  let result = await SectionModel.find(dataObj).lean();
  return result;
};

const getSection = async (dataObj: UnknowObj) => {
  let { _id } = dataObj;
  let result = await SectionModel.findOne({ _id })
    .populate("students")
    .populate({ path: "time_table.teacher_info", select: "name" })
    .populate({
      path: "teachers.teacher_info",
      select: "name email phone_number",
    })
    .lean();
  return result;
};

const getAssignedSections = async (dataObj: UnknowObj) => {
  let { _id } = dataObj;
  let result = await SectionModel.find(
    {
      teachers: { $elemMatch: { teacher_info: _id } },
    },
    { info: 1 },
  ).lean();
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
    { _id: _id },
    { $push: { teachers: teacher } },
    {
      projection: { teachers: 1 },
      new: true,
      useFindAndModify: false,
    },
  ).populate({
    path: "teachers.teacher_info",
    select: "name email phone_number",
  });
  return result;
};

const removeTeacher = async (dataObj: UnknowObj) => {
  let { _id, teacher_info } = dataObj;
  let result = await SectionModel.findOneAndUpdate(
    { _id: _id },
    { $pull: { teachers: { teacher_info } } },
    {
      projection: { teachers: 1 },
      new: true,
      useFindAndModify: false,
    },
  ).populate({
    path: "teachers.teacher_info",
    select: "name email phone_number",
  });
  return result;
};

const addClass = async (dataObj: UnknowObj) => {
  let { _id, subject_color, title, start, end, teacher_info, description } =
    dataObj;

  let schedule = {
    title,
    subject_color,
    start,
    end,
    teacher_info,
    description,
  };

  let result = await SectionModel.findOneAndUpdate(
    { _id: _id },
    { $push: { time_table: schedule } },
    {
      projection: { time_table: 1 },
      new: true,
      useFindAndModify: false,
    },
  );
  return result;
};

const removeClass = async (dataObj: UnknowObj) => {
  let { _id, class_id } = dataObj;
  let schedule = { _id: class_id };
  let result = await SectionModel.findOneAndUpdate(
    { _id: _id },
    { $pull: { time_table: schedule } },
    { projection: { time_table: 1 }, new: true, useFindAndModify: false },
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
  getAssignedSections,
};
