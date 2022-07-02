import { RequestHandler } from "express";
import { staff } from "../services/db";
import utilLib from "../libs/utilLib";
import { UnknowObj } from "../types";

const createStaff: RequestHandler = async (req, res) => {
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

		let data = await staff.createStaff({ ...req.body });
		res.status(200).json({ data, message: "Staff Created Successfully" });
	} catch (error) {
		//@ts-ignore
		res.status(400).json({ message: error.message });
	}
};

const getStaff: RequestHandler = async (req, res) => {
	try {
		let userType = (req as any).user.user_type;
		let data = await staff.getStaff({ userType });
		res.status(200).json({ data, message: "" });
	} catch (error) {
		//@ts-ignore
		res.status(400).json({ message: error.message });
	}
};

const getStaffMember: RequestHandler = async (req, res) => {
	try {
		let _id = req.params.id;
		utilLib.checkMissingFieldsAndType({ _id }, { _id: "string" });
		let data = await staff.getStaffMember({ _id });
		res.status(200).json({ data, message: "Member found" });
	} catch (error) {
		//@ts-ignore
		res.status(400).json({ message: error.message });
	}
};

const createMany: RequestHandler = async (req, res) => {
	try {
		let staffArray = req.body;
		staffArray.forEach((staff: UnknowObj) => {
			utilLib.checkMissingFieldsAndType(
				{ ...staff },
				{
					photo: "string",
					_id: "string",
					name: "string",
					email: "string",
					phone_number: "number",
					user_type: "string",
				},
			);
		});

		let data = await staff.createMany({ staffArray });
		res.status(200).json({ data, message: "Added Staff Successfully" });
	} catch (error) {
		//@ts-ignore
		res.status(400).json({ message: error.message });
	}
};

const removeAll: RequestHandler = async (req, res) => {
	try {
		let data = await staff.removeAll({});
		res.status(200).json({ data, message: "Removed successfully" });
	} catch (error) {
		//@ts-ignore
		res.status(400).json({ message: error.message });
	}
};

const editStaffMember: RequestHandler = async (req, res) => {
	try {
		utilLib.checkMissingFieldsAndType(
			{ ...req.body },
			{
				photo: "string",
				_id: "string",
				name: "string",
				email: "string",
				phone_number: "number",
				user_type: "string",
			},
		);
		let data = await staff.editStaffMember({ ...req.body });
		res.status(200).json({ data, message: "User Updated Successfully" });
	} catch (error) {
		//@ts-ignore
		res.status(400).json({ message: error.message });
	}
};

const removeStaffMember: RequestHandler = async (req, res) => {
	try {
		let _id = req.params.id;
		utilLib.checkMissingFieldsAndType({ _id }, { _id: "string" });
		let data = await staff.deleteStaffMember({ _id });
		res.status(200).json({ data, message: "Message Deleted Successfully" });
	} catch (error) {
		//@ts-ignore
		res.status(400).json({ message: error.message });
	}
};

export {
	createStaff,
	editStaffMember,
	removeAll,
	createMany,
	getStaffMember,
	getStaff,
	removeStaffMember,
};
