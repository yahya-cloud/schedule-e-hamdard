import { RequestHandler } from "express";
import utilLib from "../libs/utilLib";
import { section } from "../services/db";

const getSections: RequestHandler = async (req, res) => {
  try {
    let data = await section.getSections({});
    res.status(200).json({ data, message: "" });
  } catch (error) {
    if (error instanceof Error)
      res.status(400).json({ message: error.message });
  }
};

const getAssignedSections: RequestHandler = async (req, res) => {
  try {
    let _id = req.user._id;
    let data = await section.getAssignedSections({ _id });
    res.status(200).json({ data, message: "" });
  } catch (error) {
    if (error instanceof Error)
      res.status(400).json({ message: error.message });
  }
};

const getSection: RequestHandler = async (req, res) => {
  try {
    let _id = req.params.id;

    utilLib.checkMissingFieldsAndType({ _id }, { name: "string" });

    let data = await section.getSection({ _id });
    res.status(200).json({ data, message: "" });
  } catch (error) {
    if (error instanceof Error)
      res.status(400).json({ message: error.message });
  }
};

const createSection: RequestHandler = async (req, res) => {
  try {
    utilLib.checkMissingFieldsAndType(
      { ...req.body },
      { section_name: "string", batch_name: "string" },
    );

    let data = await section.createSection({ ...req.body });
    res.status(200).json({ data, message: "Section Created Successfully" });
  } catch (error) {
    if (error instanceof Error)
      res.status(400).json({ message: error.message });
  }
};

const createMany: RequestHandler = async (req, res) => {
  try {
    let { sections } = req.body;

    utilLib.checkMissingFieldsAndType({ sections }, { sections: "object" });

    let data = await section.createMany({ sections });
    res.status(200).json({ data, message: "" });
  } catch (error) {
    if (error instanceof Error)
      res.status(400).json({ message: error.message });
  }
};

const removeAll: RequestHandler = async (req, res) => {
  try {
    let data = await section.removeAll({});
    res.status(200).json({ data, message: "Deleted Successfully" });
  } catch (error) {
    if (error instanceof Error)
      res.status(400).json({ message: error.message });
  }
};

const addTeacher: RequestHandler = async (req, res) => {
  try {
    utilLib.checkMissingFieldsAndType(
      { ...req.body },
      {
        _id: "string",
        subject_color: "string",
        subject: "string",
        teacher_info: "string",
      },
    );

    let data = await section.addTeacher({ ...req.body });
    res.status(200).json({ data, message: "Teacher Added Successfully" });
  } catch (error) {
    if (error instanceof Error)
      res.status(400).json({ message: error.message });
  }
};

const removeTeacher: RequestHandler = async (req, res) => {
  try {
    utilLib.checkMissingFieldsAndType(
      { ...req.body },
      { _id: "string", teacher_info: "string" },
    );

    let data = await section.removeTeacher({ ...req.body });
    res.status(200).json({ data, message: "Teacher Removed Successfully" });
  } catch (error) {
    if (error instanceof Error)
      res.status(400).json({ message: error.message });
  }
};

const addClass: RequestHandler = async (req, res) => {
  try {
    utilLib.checkMissingFieldsAndType(
      { ...req.body },
      {
        _id: "string",
        heading: "string",
        sub_heading: "string",
        start_time: "string",
        end_time: "string",
        subject: "string",
        teacher_id: "string",
        description: "string",
      },
    );

    let data = await section.addClass({ ...req.body });
    res.status(200).json({ data, message: "Class Added Successfully" });
  } catch (error) {
    if (error instanceof Error)
      res.status(400).json({ message: error.message });
  }
};

const removeClass: RequestHandler = async (req, res) => {
  try {
    utilLib.checkMissingFieldsAndType(
      { ...req.body },
      {
        _id: "string",
        class_id: "string",
      },
    );

    let data = await section.removeClass({ ...req.body });
    res.status(200).json({ data, message: "Class removed Successfully" });
  } catch (error) {
    if (error instanceof Error)
      res.status(400).json({ message: error.message });
  }
};

export {
  addClass,
  removeClass,
  getSections,
  removeTeacher,
  addTeacher,
  getSection,
  createSection,
  createMany,
  removeAll,
  getAssignedSections,
};
