import { Box, Divider, Paper, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import WeekCalendar from "../../../../../components/section/WeekCalendar";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import ClassCard from "../../../../../components/section/ClassCard";
import { SectionContext } from "../../../../../contexts/sectionContext";
import {
  SectionContextType,
  TimeTableType,
} from "../../../../../@types/global";
import { getDayClasses } from "../../../../../utils/section";
import { Cookie } from "@mui/icons-material";

const Schedule = () => {
  const { section } = useContext(SectionContext) as SectionContextType;
  const [date, setDate] = useState<Date>(new Date());
  const [classes, setClasses] = useState<TimeTableType[] | undefined>([]);
  const [dayClasses, setDayClasses] = useState<TimeTableType[] | undefined>([]);

  useEffect(() => {
    let dayClass = getDayClasses(date, section?.time_table);
    setDayClasses(dayClass);
    setClasses(section?.time_table);
  }, [section]);

  useEffect(() => {
    if (classes!.length > 0) {
      console.log(classes);
      let dayClass = getDayClasses(date, classes);
      setDayClasses(dayClass);
    }
  }, [date]);

  return (
    <Paper
      sx={{
        height: "800px",
        borderRadius: "16px",
        border: `1px solid #98D698`,
      }}
      elevation={3}
      component={"div"}>
      <Stack flexDirection={"row"} sx={{ height: "100%" }}>
        <WeekCalendar classes={classes} selectedDate={date} />
        <Stack
          alignItems={"center"}
          sx={{
            borderRadius: "1.6rem",
            flex: 1,
            flexShrink: 0,
            height: "100%",
            border: `1px solid #98D698`,
          }}>
          <Box component="div" sx={{ width: "35rem" }}>
            <Calendar
              date={date}
              editableDateInputs={true}
              onChange={(date) => {
                setDate(date);
              }}
              color={"#43B47C"}
            />
            <Divider sx={{ mt: 3, borderColor: "#43B47C" }} />
          </Box>
          <Box component="div" sx={{ mt: 4 }}>
            <Typography align="center" variant="h4" fontWeight={500}>
              Class List
            </Typography>
            <Stack
              sx={{ overflowY: "scroll", height: "39rem" }}
              alignItems={"flex-start"}>
              {dayClasses!.map((el) => (
                <ClassCard
                  color={el.subject_color}
                  start={el.start}
                  end={el.end}
                  title={el.title}
                  description={el.description}
                  key={el._id}
                />
              ))}
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default Schedule;
