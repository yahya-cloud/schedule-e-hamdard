import { RequestHandler } from "express";
import * as staff from "../models/staff";
import utilLib from "../libs/utilLib";
import * as authLib from "../libs/authLib";
import { StaffSchemaType, UnknowObj } from "../types";
import { constants } from "../libs/constants";

export const createStaff: RequestHandler = async (req, res) => {
  try {
    const { name } = req.body;
    let unique_id = utilLib.getCode(constants.NUMBER_STRING, 5, name);
    let password = await authLib.generatePassword();
    let result = await staff.createStaff({ ...req.body, unique_id, password });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const getStaff: RequestHandler = async (req, res) => {
  try {
    let filter = (req as any).user.user_type === "admin" ? {} : { password: 0 };
    let result = await staff.getStaff({}, filter);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const getStaffMember: RequestHandler = async (req, res) => {
  try {
    let memberId = req.params.id;
    let result = await staff.getStaffMember({ _id: memberId }, { password: 0 });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const createMany: RequestHandler = async (req, res) => {
  try {
    let staffArray: Array<StaffSchemaType> = await Promise.all(
      req.body.map(async (el: UnknowObj) => {
        return {
          ...el,
          unique_id: utilLib.getCode(constants.NUMBER_STRING, 5, el.name),
          password: await authLib.generatePassword(),
        };
      })
    );

    let result = await staff.createMany(staffArray);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const removeAll: RequestHandler = async (req, res) => {
  try {
    let result = await staff.removeAll({});
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const editStaffMember: RequestHandler = async (req, res) => {
  try {
    let { _id, updateFields } = req.body;
    let result = await staff.editStaffMember({ _id }, { ...updateFields });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const removeStaffMember: RequestHandler = async (req, res) => {
  try {
    let { id: _id } = req.params;
    let result = await staff.deleteStaffMember({ _id });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
