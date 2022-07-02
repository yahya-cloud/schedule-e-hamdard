import { RequestHandler } from "express";
import { student } from "../services/db";
import * as authLib from "../libs/authLib";
import { UnknowObj } from "../types";
import utilLib from "../libs/utilLib";

const getStudents: RequestHandler = async (req, res) => {
  try {
    let userType = (req as any).user.user_type;
    let data = await student.getStudents({ userType });
    res.status(200).json({ data, message: "" });
  } catch (error) {
    //@ts-ignore
    res.status(400).json({ message: error.message });
  }
};

const getStudent: RequestHandler = async (req, res) => {
  try {
    let _id = req.params.id;
    utilLib.checkMissingFieldsAndType({ _id }, { _id: "string" });
    let data = await student.getStudent({ _id });
    res.status(200).json({ data, message: "" });
  } catch (error) {
    //@ts-ignore
    res.status(400).json({ message: error.message });
  }
};

const createStudent: RequestHandler = async (req, res) => {
  try {
    utilLib.checkMissingFieldsAndType(
      { ...req.body },
      {
        name: "string",
        photo: "string",
        email: "string",
        phone_number: "number",
        user_type: "string",
      },
    );

    const data = await student.createStudent({ ...req.body });
    res.status(200).json({ data, message: "Student Added Successfully" });
  } catch (error) {
    //@ts-ignore
    res.status(400).json({ message: error.message });
  }
};

const createMany: RequestHandler = async (req, res) => {
  try {
    let studentsArray = req.body;
    studentsArray.forEach((person: UnknowObj) => {
      utilLib.checkMissingFieldsAndType(
        { ...person },
        {
          name: "string",
          email: "string",
          phone_number: "number",
          en_number: "string",
          user_type: "string",
          section: "string",
        },
      );
    });

    const data = await student.createMany({ studentsArray });
    res.status(200).json({ data, message: "Students Added Successfully" });
  } catch (error) {
    //@ts-ignore
    res.status(400).json({ message: error.message });
  }
};

const removeAll: RequestHandler = async (req, res) => {
  try {
    let data = await student.removeAll({});
    res.status(200).json({ data, message: "students Removed Successfully" });
  } catch (error) {
    //@ts-ignore
    res.status(400).json({ message: error.message });
  }
};

const editStudent: RequestHandler = async (req, res) => {
  try {
    utilLib.checkMissingFieldsAndType(
      { ...req.body },
      {
        name: "string",
        email: "string",
        phone_number: "number",
        en_number: "string",
        user_type: "string",
        section: "string",
      },
    );
    let data = await student.editStudent({ ...req.body });
    res.status(200).json({ data, message: "Student Updated Successfully" });
  } catch (error) {
    //@ts-ignore
    res.status(400).json({ message: error.message });
  }
};

const removeStudent: RequestHandler = async (req, res) => {
  try {
    let _id = req.params.id;
    utilLib.checkMissingFieldsAndType({ _id }, { _id: "string" });
    let data = await student.deleteStudent({ _id });
    res.status(200).json(data);
  } catch (error) {
    //@ts-ignore
    res.status(400).json({ message: error.message });
  }
};

export {
  createStudent,
  removeStudent,
  editStudent,
  removeAll,
  getStudents,
  createMany,
  getStudent,
};
