import React, { useEffect, useState, useContext } from "react";
import { Box, Stack, Grid, Typography, Paper } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import UserContextType, { StaffSchemaType } from "../../../@types/userContext";
import Button from "../../../components/global/Button";
import { UserContext } from "../../../contexts/userContext";
import Info from "../../../components/global/Info";
import { decryptString } from "../../../lib/section";
import SectionAlloted from "./SectionAlloted";
import { SectionType, TimeTableType } from "../../../@types/global";
import Schedule from "../../../components/global/Schedule";
import person from "../../../assets/images/person.png";

interface Props {
  id: string;
}

const Teacher = ({ id }: Props) => {
  const { makeApiCall } = useContext(UserContext) as UserContextType;
  const [teacher, setTeacher] = useState<StaffSchemaType | null>(null);
  const [timeTable, setTimeTable] = useState<TimeTableType[] | null>(null);

  const getTeacherSchedule = (sections: SectionType[]) => {
    let newTimeTable = sections.map((el) =>
      el.time_table.filter(
        //@ts-ignore
        (schedule) => schedule.teacher_info === teacher._id
      )
    );
    let mergedArray = newTimeTable.reduce(
      (accumulator, value) => accumulator.concat(value),
      []
    );

    return mergedArray;
  };

  useEffect(() => {
    async function getTeacher() {
      let fetchedData = (await makeApiCall(
        `/staff/${id}`,
        {},
        "get"
      )) as StaffSchemaType;

      fetchedData = {
        ...fetchedData,
        password: decryptString(fetchedData.password),
      };
      setTeacher(fetchedData);
    }
    getTeacher();
  }, []);

  useEffect(() => {
    if (teacher) {
      let timeTable = getTeacherSchedule(teacher?.sections);
      setTimeTable(timeTable);
    }
  }, [teacher]);

  return (
    <Box component="div">
      <Stack
        sx={{ mt: 5 }}
        width="100%"
        alignItems={"flex-start"}
        justifyContent={"space-between"}
        flexDirection="row">
        <Box
          sx={{
            backgroundColor: "#ebebeb",
            minWidth: "25rem",
            height: "25rem",
            borderRadius: "50%",
            backgroundSize: "contain",
            backgroundImage: `url(${person})`,
          }}
          component="div"></Box>
        <Box
          sx={{
            height: "40rem",
            position: "relative",
            width: "100%",
            padding: ".5rem 0px 0px 4rem",
          }}
          component="form">
          <Grid container columnSpacing={2} rowSpacing={4}>
            {["name", "email", "unique_id", "phone_number", "password"].map(
              (el) => (
                <Grid key={el} item md={3}>
                  {teacher && (
                    <Info
                      heading={el.charAt(0).toUpperCase() + el.slice(1)}
                      detail={
                        `${(teacher as any)[el]}`.charAt(0).toUpperCase() +
                        `${(teacher as any)[el]}`.slice(1)
                      }
                    />
                  )}
                </Grid>
              )
            )}
            <Grid item md={4}></Grid>
            <SectionAlloted sections={teacher?.sections} />
          </Grid>
        </Box>
      </Stack>
      <Typography sx={{ mt: 2, mb: 4 }} variant="h3">
        Teacher Schedule
      </Typography>
      {timeTable && <Schedule timeTable={timeTable} />}
    </Box>
  );
};

export default Teacher;
