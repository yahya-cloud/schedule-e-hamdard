import { RequestHandler } from "express";
import * as student from "../models/student";
import * as authLib from "../libs/authLib";
import { StudentSchemaType, UnknowObj, userRequest } from "../types";

export const getStudents: RequestHandler = async (req, res) => {
  try {
    let filter = (req as any).user.user_type === "admin" ? {} : { password: 0 };
    let result = await student.getStudents({}, filter);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const getStudent: RequestHandler = async (req, res) => {
  try {
    let studentId = req.params.id;
    let result = await student.getStudent({ _id: studentId }, { password: 0 });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const createStudent: RequestHandler = async (req, res) => {
  try {
    let password = await authLib.generatePassword();
    let result = await student.createStudent({ ...req.body, password });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const createMany: RequestHandler = async (req, res) => {
  try {
    let studentsArray: Array<StudentSchemaType> = await Promise.all(
      req.body.map(async (el: UnknowObj) => {
        return {
          ...el,
          password: await authLib.generatePassword(),
        };
      })
    );

    const result = await student.createMany(studentsArray);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const removeAll: RequestHandler = async (req, res) => {
  try {
    let result = await student.removeAll({});
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const editStudent: RequestHandler = async (req, res) => {
  try {
    let { _id, updateFields } = req.body;
    let result = await student.editStudent({ _id }, { ...updateFields });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const removeStudent: RequestHandler = async (req, res) => {
  try {
    let { id: _id } = req.params;
    let result = await student.deleteStudent({ _id });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
