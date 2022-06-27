import { UserType } from "./userContext";

export type field = string | number;

export type apiMethod = "post" | "get" | "put" | "patch" | "delete";

export type unknownObject = { [key: string]: any };

export interface RequestBodyType {
  [key: string]: field;
}

export interface ResponseBodyType {
  data: unknownObject;
  message: string;
}

export interface ApiResponseType {
  data: ResponseBodyType;
}

//section
export interface SectionInfoType {
  section_name: string;
  batch_name: string;
  _id: string;
}
export interface TeacherInfoType {
  subject_color: string;
  subject: string;
  teacher_info: {
    _id: string;
    name: string;
    email: string;
    phone_number: number;
  };
}

export interface TimeTableType {
  subject_color: string;
  title: string;
  start: Date;
  end: Date;
  description: string;
  teacher_info: TeacherInfoType;
  _id: string;
}

export interface SectionType {
  _id: string;
  info: SectionInfoType;
  teachers: TeacherInfoType[];
  time_table: TimeTableType[];
}

export interface SectionContextType {
  sectionId: string | null;
  setSectionId: (value: string) => void;
  user: UserType;
  section: SectionType | null;
  addClass: (data: unknownObject) => Promise<void>;
  deleteTeacher: (teacher_info: string) => Promise<void>;
}

//batches
export interface BatchType {
  _id: string;
  name: string;
}

export interface BatchDataType extends BatchType {
  sections: SectionType[];
}

//staff
