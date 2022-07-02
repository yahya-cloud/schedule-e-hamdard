import { Box, Stack } from "@mui/material";
import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContextType, { StaffSchemaType } from "../../../@types/userContext";
import Button from "../../../components/global/Button";
import { SearchInput } from "../../../components/global/Inputs";
import BasicTable from "../../../components/section/Table";
import { UserContext } from "../../../contexts/userContext";
import { decryptString } from "../../../lib/section";
import columns from "./columns";
import { rootRoute } from "../../../config.keys";
import useSearchFilter from "../../../hooks/useSearchFilter";

const Teachers = () => {
  const [teachers, setTeachers] = useState<StaffSchemaType[]>([]);
  const { makeApiCall, user } = useContext(UserContext) as UserContextType;
  const [value, setValue, filteredData] = useSearchFilter(teachers, [
    "name",
    "unique_id",
  ]);
  const navigate = useNavigate();

  const viewTeacher = (_id: string) => {
    navigate(`${rootRoute.admin}/teacher/${_id}`);
  };

  useEffect(() => {
    async function getTeachers() {
      let fetchedTeachers = (await makeApiCall(
        "/staff/",
        {},
        "get",
      )) as StaffSchemaType[];
      fetchedTeachers = fetchedTeachers.map((el, id) => {
        let password = decryptString(el.password);
        return { id: id + 1, ...el, password };
      });
      setTeachers([...fetchedTeachers]);
    }
    getTeachers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteTeacher = async (teacherId: string) => {
    await makeApiCall(`/staff/${teacherId}`, {}, "delete");
    let updatedTeachers = [...teachers].filter((el) => el._id !== teacherId);
    setTeachers([...updatedTeachers]);
  };
  const teacherColumns = columns(user?.user_type, deleteTeacher, viewTeacher);

  return (
    <Box component="div">
      <Stack>
        <Stack direction={"row"} sx={{ marginBottom: "4rem" }}>
          <SearchInput
            type="text"
            label="Search Teacher"
            name="search-teacher"
            inputStyles={{ width: "25rem", marginRight: "2rem" }}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <Button
            customStyles={{ width: "18.5rem", height: "5rem" }}
            onClick={() => {
              navigate(`${rootRoute.admin}/teacher/addTeacher`);
            }}
            variant="contained"
            color="primary"
            text="Add Teacher"
          />
        </Stack>
        <Box
          sx={{
            margin: "0 auto",
            minWidth: "118rem",
          }}
        >
          <BasicTable rows={filteredData} columns={teacherColumns} />
        </Box>
      </Stack>
    </Box>
  );
};

export default Teachers;
