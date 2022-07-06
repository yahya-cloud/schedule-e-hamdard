import { constants } from "../../libs/constants";
import utilLib from "../../libs/utilLib";
import * as authLib from "../../libs/authLib";
import { StaffModel } from "../../models";
import { StaffSchemaType, StringObject } from "../../types";

const createStaff = async (dataObj: StringObject) => {
  let { name } = dataObj;
  let unique_id = utilLib.getCode(constants.NUMBER_STRING, 5, name);
  let password = await authLib.generatePassword();
  let finalObj = { ...dataObj, unique_id, password };

  let newStaff = new StaffModel(finalObj);
  let result = await newStaff.save();
  return result;
};

const getStaff = async (dataObj: StringObject) => {
  let filter = dataObj.userType === "admin" ? {} : { password: 0 };
  let result = await StaffModel.find({}, { ...filter }).lean();
  return result;
};

const getStaffMember = async (dataObj: StringObject) => {
  let { _id } = dataObj;
  let result = await StaffModel.findOne({ _id: _id })
    .populate({
      path: "sections",
      options: { select: "time_table info " },
    })
    .lean();
  return result;
};

const createMany = async (dataObj: any) => {
  let staffArray: Array<StaffSchemaType> = await Promise.all(
    dataObj.staffArray.map(async (el: StringObject) => {
      return {
        ...el,
        unique_id: utilLib.getCode(constants.NUMBER_STRING, 5, el.name),
        password: await authLib.generatePassword(),
      };
    }),
  );

  let result = await StaffModel.insertMany(staffArray);
  return result;
};

const removeAll = async (dataObj: any) => {
  let result = await StaffModel.deleteMany(dataObj);
  return result;
};

const editStaffMember = async (dataObj: StringObject) => {
  let { _id } = dataObj;
  let result = await StaffModel.findOneAndUpdate(
    { _id: _id },
    { ...dataObj },
    {
      new: true,
      useFindAndModify: false,
    },
  );
  return result;
};

const deleteStaffMember = async (dataObj: StringObject) => {
  let { _id } = dataObj;
  let result = await StaffModel.findOneAndDelete(
    { _id: _id },
    {
      new: true,
      useFindAndModify: false,
    },
  );
  return result;
};

export {
  createStaff,
  editStaffMember,
  createMany,
  removeAll,
  getStaff,
  getStaffMember,
  deleteStaffMember,
};
