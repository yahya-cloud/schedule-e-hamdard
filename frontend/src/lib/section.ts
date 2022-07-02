import { TeacherInfoType, TimeTableType } from "../@types/global";
import crypto from "crypto";
import { auth } from "../config.keys";

const teacher = (
	arry: TeacherInfoType[],
	id: string,
): TeacherInfoType | undefined => {
	let teacherDetail: TeacherInfoType | undefined = arry.find(
		(el) => el.teacher_info._id === id,
	);
	return teacherDetail;
};

const getRGBA = (color: string): string => {
	return color.replace(")", ", 0.1)").replace("rgb", "rgba");
};

const getDayClasses = (
	day: Date,
	arry: TimeTableType[] | undefined,
): TimeTableType[] | undefined => {
	let selectedDay = new Date(day.setHours(0, 0, 0));
	let nextDay = new Date(day.setHours(0, 0, 0));
	nextDay.setDate(selectedDay.getDate() + 1);
	let newArry = arry?.filter(
		(el) => new Date(el.start) > selectedDay && new Date(el.end) < nextDay,
	);
	return newArry;
};

const decryptString = (text: string) => {
	let textParts: Array<string> = text.split(":");
	let iv = Buffer.from(textParts.shift()!, "hex");
	let key = crypto
		.createHash("sha256")
		.update(String(auth.ENCRYPTION_KEY))
		.digest("base64")
		.slice(0, 32);
	let encryptedText = Buffer.from(textParts.join(":"), "hex");
	let decipher = crypto.createDecipheriv(auth.ALGORITHM, key, iv);
	let decrypted = decipher.update(encryptedText);
	decrypted = Buffer.concat([decrypted, decipher.final()]);
	return decrypted.toString();
};

export { teacher, getRGBA, decryptString, getDayClasses };
