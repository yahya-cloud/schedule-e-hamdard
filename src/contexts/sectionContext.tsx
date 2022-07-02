import React, { useState, useContext, createContext, useEffect } from "react";
import UserContextType, { StudentSchemaType } from "../@types/userContext";
import {
	RequestBodyType,
	SectionContextType,
	SectionType,
	unknownObject,
} from "../@types/global";
import { UserContext } from "./userContext";
import { teacher } from "../lib/section";

interface Props {
	children: React.ReactNode;
}

let defaultValues = {
	section: {
		_id: "",
		info: {
			section_name: "",
			batch_name: "",
			_id: "",
		},
		teachers: [],
		time_table: [],
		students: [],
	},
};

const SectionContext = createContext<SectionContextType | null>(null);

const SectionProvider = ({ children }: Props) => {
	const { makeApiCall, user } = useContext(UserContext) as UserContextType;

	const [section, setSection] = useState<SectionType>({
		...defaultValues.section,
	});
	const [sectionId, setSectionId] = useState<string | null>(null);

	useEffect(() => {
		const getSection = async () => {
			if (sectionId) {
				const result: SectionType = (await makeApiCall(
					`/section/${sectionId}`,
					{},
					"get",
				)) as SectionType;
				setSection({ ...result });
			}
		};
		getSection();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [sectionId]);

	const updateSection = (
		newValue: any[],
		identifier: "teachers" | "time_table" | "students",
	) => {
		let newSection: SectionType = { ...section } as SectionType;
		newSection[identifier] = [...newValue];
		setSection(newSection);
	};

	const addClass = async (data: unknownObject) => {
		const result = teacher(section.teachers, user!._id);
		if (result) {
			let { teacher_info, subject_color, subject } = result;
			let { name, _id } = teacher_info;
			let payload = {
				_id: section._id,
				title: subject,
				subject_color,
				teacher_info: _id,
				description: name,
				...data,
			};

			let { time_table } = (await makeApiCall(
				"/section/addClass",
				payload,
				"patch",
			)) as SectionType;

			updateSection(time_table, "time_table");
		}
	};

	const removeClass = async (classId: string) => {
		let payload = { _id: section._id, class_id: classId };
		let { time_table } = (await makeApiCall(
			"/section/removeClass",
			payload,
			"patch",
		)) as SectionType;

		updateSection(time_table, "time_table");
	};

	const deleteTeacher = async (teacher_info: string) => {
		let payload: RequestBodyType = { _id: section._id, teacher_info };
		let { teachers } = (await makeApiCall(
			"/section/removeTeacher",
			payload,
			"patch",
		)) as SectionType;

		updateSection(teachers, "teachers");
	};

	const addTeacher = async (
		subject_color: string,
		subject: string,
		teacher_info: string,
	) => {
		let payload: RequestBodyType = {
			_id: section._id,
			subject,
			subject_color,
			teacher_info,
		};
		let { teachers } = (await makeApiCall(
			"/section/addTeacher",
			payload,
			"patch",
		)) as SectionType;

		updateSection(teachers, "teachers");
	};

	const addStudent = async (studentInfo: unknownObject) => {
		let { name, en_number, phone_number, email } = studentInfo;
		let payload = {
			name,
			en_number,
			phone_number,
			email,
			section: section._id,
			user_type: "student",
		};
		let student: StudentSchemaType = (await makeApiCall(
			"/student/",
			payload,
			"post",
		)) as StudentSchemaType;
		let students = [...section.students, student];
		updateSection(students, "students");
	};

	const deleteStudent = async (studentId: string) => {
		await makeApiCall(`/student/${studentId}`, {}, "delete");
		let students = [...section.students].filter((el) => el._id !== studentId);
		updateSection(students, "students");
	};

	return (
		<SectionContext.Provider
			value={{
				section,
				sectionId,
				user,
				setSectionId,
				addTeacher,
				addClass,
				removeClass,
				deleteTeacher,
				addStudent,
				deleteStudent,
			}}
		>
			{children}
		</SectionContext.Provider>
	);
};

export { SectionContext };
export default SectionProvider;
