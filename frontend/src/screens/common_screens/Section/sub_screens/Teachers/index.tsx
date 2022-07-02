import React, { useContext, useEffect, useState } from "react";
import { SectionContext } from "../../../../../contexts/sectionContext";
import {
  SectionContextType,
  TeacherInfoType,
} from "../../../../../@types/global";
import { Grid } from "@mui/material";
import TeacherCard from "../../../../../components/section/TeacherCard";

const Teachers = () => {
  const { section, deleteTeacher } = useContext(
    SectionContext,
  ) as SectionContextType;
  const [teachers, setTeachers] = useState<TeacherInfoType[] | undefined>([]);

  useEffect(() => {
    setTeachers(section?.teachers);
  }, [section]);

  return (
    <Grid container spacing={5}>
      {teachers?.map((el) => {
        if (el.teacher_info) {
          let { name, email, phone_number } = el?.teacher_info;
          let info = { name, email, subject: el?.subject, phone_number };
          return (
            <Grid key={el?.teacher_info?._id} item md={4}>
              <TeacherCard
                deleteTeacher={() => deleteTeacher(el.teacher_info?._id)}
                info={info}
                color={el.subject_color}
              />
            </Grid>
          );
        } else {
          return null;
        }
      })}
    </Grid>
  );
};

export default Teachers;
