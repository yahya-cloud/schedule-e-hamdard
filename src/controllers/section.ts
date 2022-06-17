import { RequestHandler } from "express";
import * as section from "../models/section";

export const getSections: RequestHandler = async (req, res) => {
  try {
    let result = await section.getSections({});
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const getSection: RequestHandler = async (req, res) => {
  try {
    let sectionId = req.params.id;
    let result = await section.getSection({ _id: sectionId });
    console.log(sectionId);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const createSection: RequestHandler = async (req, res) => {
  try {
    let result = await section.createSection(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const createMany: RequestHandler = async (req, res) => {
  try {
    let result = await section.createMany(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const removeAll: RequestHandler = async (req, res) => {
  try {
    let result = await section.removeAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const addTeacher: RequestHandler = async (req, res) => {
  try {
    const { _id, teacher } = req.body;
    let result = await section.addTeacher({ _id }, { ...teacher });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const removeTeacher: RequestHandler = async (req, res) => {
  try {
    const { _id, teacherInfo: teacher_info } = req.body;
    let result = await section.removeTeacher({ _id }, { teacher_info });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const addClass: RequestHandler = async (req, res) => {
  try {
    const { _id, classInfo } = req.body;
    let result = await section.addClass({ _id }, { ...classInfo });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const removeClass: RequestHandler = async (req, res) => {
  try {
    const { _id, classId } = req.body;
    let result = await section.removeClass({ _id }, { _id: classId });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
