import { UserModel } from "../../models";
import * as authLib from "../../libs/authLib";
import { StaffSchemaType, StringObject } from "../../types";
import utilLib from "../../libs/utilLib";

const getUsers = async (dataObj: StringObject) => {
  let data = await UserModel.find(dataObj).lean();
  data = data.map((el) => {
    return { ...el, password: authLib.decryptString(el.password) };
  });
  return data;
};

const login = async (dataObj: StringObject) => {
  let { id, password } = dataObj;

  let fetchedUser = await UserModel.findOne(
    {
      $or: [
        { __t: "Student", en_number: id },
        { __t: "Staff", unique_id: id },
      ],
    },
    { id: 0, __t: 0, __v: 0 },
  );

  if (!fetchedUser) {
    throw new Error("User Not found");
  }

  let correctPassword = utilLib.compareStrings(
    authLib.decryptString(fetchedUser!.password),
    password,
  );

  if (!correctPassword) {
    throw new Error("Password is Incorrect");
  }

  let token = authLib.issueToken(String(fetchedUser._id));

  let userToReturn = utilLib.deleteObjectKey({ ...fetchedUser.toObject() }, [
    "password",
    "id",
  ]);

  let data = { fetchedUser: userToReturn, token };

  return data;
};

const createMany = async (dataObj: StringObject) => {
  let userArray: Array<StaffSchemaType> = await Promise.all(
    dataObj.userArray.map(async (el: StringObject) => {
      return {
        ...el,
        password: authLib.encryptString(el.password),
      };
    }),
  );
  let data = await UserModel.insertMany(userArray);
  return data;
};

const removeAll = async (dataObj: StringObject) => {
  let data = await UserModel.deleteMany(dataObj);
  return data;
};

export { getUsers, removeAll, login, createMany };
