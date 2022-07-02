import { RequestHandler } from "express";
import { user } from "../services/db";
import utilLib from "../libs/utilLib";
import * as authLib from "../libs/authLib";
import { userRequest } from "../types";

const getUsers: RequestHandler = async (req, res) => {
	try {
		let data = await user.getUsers({});
		res.status(200).json({ data, message: "" });
	} catch (error) {
		//@ts-ignore
		res.status(400).json({ message: error.message });
	}
};

const getUserWithToken: RequestHandler = (req: userRequest, res) => {
	if (req.user) {
		//@ts-ignore
		let data = utilLib.deleteObjectKey({ ...req.user.toObject() }, [
			"password",
			"id",
			"__v",
		]);

		res.status(200).json({ data, message: "" });
	} else {
		res.status(400).json({ data: "", message: "" });
	}
};

const removeAll: RequestHandler = async (req, res) => {
	try {
		let data = await user.removeAll({});
		res.status(200).json({ data, message: "Removed users successfully" });
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
			},
		);

		let { fetchedUser, token } = await user.login({ ...req.body });

		res.cookie("jwt", token, {
			httpOnly: true,
			maxAge: 1000 * 60 * 60 * 24 * 7,
		});
		return res
			.status(200)
			.json({ data: fetchedUser, message: "User successfully logged-in" });
	} catch (error) {
		//@ts-ignore
		res.status(404).json({ message: error.message });
	}
};

const createMany: RequestHandler = async (req, res) => {
	try {
		let userArray = req.body;
		let data = await user.createMany({ userArray });
		res.status(200).json({ data, message: "Users created  Successful" });
	} catch (error) {
		//@ts-ignore
		res.status(400).json({ message: error.message });
	}
};

const logout: RequestHandler = async (req, res) => {
	res.clearCookie("jwt");
	res.status(200).json({ message: "User logout Successful" });
};

export { getUsers, removeAll, createMany, login, logout, getUserWithToken };
