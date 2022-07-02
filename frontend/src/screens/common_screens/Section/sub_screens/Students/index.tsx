import { Box } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import BasicTable from "../../../../../components/section/Table";
import { UserContext } from "../../../../../contexts/userContext";
import UserContextType, {
  StudentSchemaType,
} from "../../../../../@types/userContext";
import columns from "./columns";
import { SectionContext } from "../../../../../contexts/sectionContext";
import { SectionContextType } from "../../../../../@types/global";
import { decryptString } from "../../../../../lib/section";

const Students = () => {
  const { section, deleteStudent } = useContext(
    SectionContext,
  ) as SectionContextType;
  const { user } = useContext(UserContext) as UserContextType;
  const [students, setStudents] = useState<any[]>([]);
  const deleteHandler = async (id: string) => {
    await deleteStudent(id);
  };
  const studentColumns = columns(user?.user_type, deleteHandler);

  useEffect(() => {
    let studentRows: StudentSchemaType[] = section!.students.map((el, id) => {
      let password = decryptString(el.password);
      return { id: id + 1, ...el, password };
    });
    setStudents(studentRows);
  }, [section]);

  return (
    <Box
      sx={{
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        width: "110rem",
      }}
      component="div"
    >
      <BasicTable rows={students} columns={studentColumns} />
    </Box>
  );
};

export default Students;
