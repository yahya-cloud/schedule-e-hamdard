import { UserModel } from "../../models";
import * as authLib from "../../libs/authLib";
import { UnknowObj } from "../../types";
import utilLib from "../../libs/utilLib";

const getUsers = async (dataObj: UnknowObj) => {
  let data = await UserModel.find(dataObj).lean();
  data = data.map((el) => {
    return { ...el, password: authLib.decryptString(el.password) };
  });
  return data;
};

const login = async (dataObj: UnknowObj) => {
  let { id, password } = dataObj;

  let fetchedUser = await UserModel.findOne({
    $or: [
      { __t: "Student", en_number: id },
      { __t: "Staff", unique_id: id },
    ],
  });

  if (!fetchedUser) {
    throw new Error("User Not found");
  }

  let correctPassword = utilLib.compareStrings(
    authLib.decryptString(fetchedUser!.password),
    password
  );

  if (!correctPassword) {
    throw new Error("Password is Incorrect");
  }

  let token = authLib.issueToken(String(fetchedUser._id));

  let data = { fetchedUser, token };

  return data;
};

// const createAdmin = async (dataObj: UnknowObj) => {
//   let admin = new UserModel(dataObj);
//   let data = admin.save();
//   return data;
// };

// const createMany = async (dataObj: UnknowObj) => {
//   let data = await UserModel.insertMany(dataObj);
//   return data;
// };

const removeAll = async (dataObj: UnknowObj) => {
  let data = await UserModel.deleteMany(dataObj);
  return data;
};

export { getUsers, removeAll, login };
