import React, { useState, useContext, createContext, useEffect } from "react";
import UserContextType, {
  RequestMessage,
  UserType,
} from "../@types/userContext";
import {
  apiMethod,
  RequestBodyType,
  ResponseBodyType,
  SectionContextType,
  SectionType,
  TeacherInfoType,
  unknownObject,
} from "../@types/global";
import { UserContext } from "./userContext";
import { useLocation, useParams } from "react-router-dom";
import { teacher } from "../utils/section";

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
          "get"
        )) as SectionType;
        setSection({ ...result });
      }
    };
    getSection();
  }, [sectionId]);

  const updateSection = (
    newValue: any[],
    identifier: "teachers" | "time_table"
  ) => {
    let newSection: SectionType = { ...section } as SectionType;
    newSection[identifier] = [...newValue];
    setSection(newSection);
  };

  const addClass = async (data: unknownObject) => {
    const teacherInfo = teacher(section.teachers, user._id);

    // let payload: RequestBodyType = {};
  };

  const deleteTeacher = async (teacher_info: string) => {
    let payload: RequestBodyType = { _id: section._id, teacher_info };
    let { teachers } = (await makeApiCall(
      "/section/removeTeacher",
      payload,
      "patch"
    )) as SectionType;

    updateSection(teachers, "teachers");
  };

  return (
    <SectionContext.Provider
      value={{
        section,
        sectionId,
        setSectionId,
        user,
        addClass,
        deleteTeacher,
      }}>
      {children}
    </SectionContext.Provider>
  );
};

export { SectionContext };
export default SectionProvider;
