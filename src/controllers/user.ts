import { RequestHandler } from "express";
import { user } from "../services/db";
import utilLib from "../libs/utilLib";
import * as authLib from "../libs/authLib";

const getUsers: RequestHandler = async (req, res) => {
  try {
    let data = await user.getUsers({});
    res.status(200).json({ data, message: "" });
  } catch (error) {
    //@ts-ignore
    res.status(400).json({ message: error.message });
  }
};

//  const createMany: RequestHandler = async (req, res) => {
//   try {
//     let data = await user.createMany(req.body);
//     res.status(200).json(data);
//   } catch (error) {
//     //@ts-ignore
//   }
// };

const removeAll: RequestHandler = async (req, res) => {
  try {
    let data = await user.removeAll({});
    res.status(200).json(data);
  } catch (error) {
    //@ts-ignore
    res.status(400).json({ message: error.message });
  }
};

const login: RequestHandler = async (req, res) => {
  try {
    utilLib.checkMissingFieldsAndType(
      { ...req.body },
      {
        id: "string",
        password: "string",
      }
    );

    let { fetchedUser, token } = await user.login({ ...req.body });

    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });
    return res.status(200).json(fetchedUser);
  } catch (error) {
    //@ts-ignore
    res.status(400).json({ message: error.message });
  }
};

const logout: RequestHandler = async (req, res) => {
  res.clearCookie("jwt");
  res.status(200).json({ message: "User logout Successful" });
};

export { getUsers, removeAll, login, logout };
