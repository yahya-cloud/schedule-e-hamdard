import { RequestHandler } from "express";
import * as user from "../models/user";
import utilLib from "../libs/utilLib";
import * as authLib from "../libs/authLib";

export const getUsers: RequestHandler = async (req, res) => {
  try {
    let result = await user.getUsers({});
    result = result.map((el) => {
      return { ...el, password: authLib.decryptString(el.password) };
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const createMany: RequestHandler = async (req, res) => {
  try {
    let result = await user.createMany(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const removeAll: RequestHandler = async (req, res) => {
  try {
    let result = await user.removeAll({});
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const login: RequestHandler = async (req, res) => {
  try {
    const { id, password } = req.body;
    let fetchedUser = await user.login([
      { __t: "Student", en_number: id },
      { __t: "Staff", unique_id: id },
    ]);

    if (!fetchedUser) {
      return res.status(401).json({ message: "User not found" });
    }

    let correctPassword = utilLib.compareStrings(
      authLib.decryptString(fetchedUser!.password),
      password
    );

    if (!correctPassword) {
      return res.status(401).json({ message: "Password is incorrect" });
    }
    let token = authLib.issueToken(String(fetchedUser._id));
    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });
    return res.status(200).json(fetchedUser);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const logout: RequestHandler = async (req, res) => {
  res.clearCookie("jwt");
  res.status(200).json({ message: "User logout Successful" });
};
