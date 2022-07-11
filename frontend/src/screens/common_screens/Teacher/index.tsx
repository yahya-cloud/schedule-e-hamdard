import React, { useEffect, useState, useContext } from "react";
import { Box, Stack, Grid, Typography } from "@mui/material";
import UserContextType, { StaffSchemaType } from "../../../@types/userContext";
import { UserContext } from "../../../contexts/userContext";
import Info from "../../../components/global/Info";
import { decryptString } from "../../../lib/section";
import SectionAlloted from "./SectionAlloted";
import { SectionType, TimeTableType } from "../../../@types/global";
import Schedule from "../../../components/global/Schedule";
import person from "../../../assets/images/person.png";
import { StyledImageBox, StyledInfoBox } from "./styles";

type Props = {
  id: string;
};

const Teacher = ({ id }: Props) => {
  const { makeApiCall } = useContext(UserContext) as UserContextType;
  const [teacher, setTeacher] = useState<StaffSchemaType | null>(null);
  const [timeTable, setTimeTable] = useState<TimeTableType[] | null>(null);

  const getTeacherSchedule = (sections: SectionType[]) => {
    let newTimeTable = sections.map((el) =>
      el.time_table.filter(
        (schedule: TimeTableType) => schedule.teacher_info === teacher?._id,
      ),
    );
    let mergedArray = newTimeTable.reduce(
      (accumulator, value) => accumulator.concat(value),
      [],
    );

    return mergedArray;
  };

  useEffect(() => {
    async function getTeacher() {
      let fetchedData = (await makeApiCall(
        `/staff/${id}`,
        {},
        "get",
      )) as StaffSchemaType;

      fetchedData = {
        ...fetchedData,
        password: decryptString(fetchedData.password),
      };
      setTeacher(fetchedData);
    }
    getTeacher();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (teacher) {
      let updatedTimeTable = getTeacherSchedule(teacher?.sections);
      setTimeTable(updatedTimeTable);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [teacher]);

  return (
    <Box component="div">
      <Stack
        sx={{ mt: 5 }}
        width="100%"
        alignItems={"flex-start"}
        justifyContent={"space-between"}
        flexDirection="row"
      >
        <StyledImageBox
          sx={{
            backgroundImage: `url(${person})`,
          }}
          component="div"
        ></StyledImageBox>
        <StyledInfoBox component="form">
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
              ),
            )}
            <Grid item md={4}></Grid>
            <SectionAlloted sections={teacher?.sections} />
          </Grid>
        </StyledInfoBox>
      </Stack>
      <Typography sx={{ mt: 2, mb: 4 }} variant="h3">
        Teacher Schedule
      </Typography>
      {timeTable && <Schedule timeTable={timeTable} />}
    </Box>
  );
};

export default Teacher;
