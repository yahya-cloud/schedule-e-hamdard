import { Box, Divider, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { TimeTableType } from "../../../@types/global";
import { getDayClasses } from "../../../lib/section";
import WeekCalendar from "../../section/WeekCalendar";
import ClassCard from "../../section/ClassCard";

interface Props {
  timeTable: TimeTableType[];
}

const Schedule = (props: Props) => {
  const [date, setDate] = useState<Date>(new Date());
  const [classes, setClasses] = useState<TimeTableType[] | undefined>([]);
  const [dayClasses, setDayClasses] = useState<TimeTableType[] | undefined>([]);

  useEffect(() => {
    if (props.timeTable) {
      let dayClass = getDayClasses(date, props.timeTable);
      setDayClasses(dayClass);
      setClasses(props.timeTable);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.timeTable]);

  useEffect(() => {
    if (classes!.length > 0) {
      let dayClass = getDayClasses(date, classes);
      setDayClasses(dayClass);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  return (
    <Paper
      sx={{
        height: "800px",
        borderRadius: "16px",
        border: `1px solid #98D698`,
      }}
      elevation={3}
      component={"div"}
    >
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
          }}
        >
          <Box component="div">
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
              alignItems={"flex-start"}
            >
              {dayClasses!.map((el) => (
                <ClassCard
                  color={el.subject_color}
                  start={el.start}
                  end={el.end}
                  title={el.title}
                  description={el.description}
                  key={el._id}
                  deleteClass={() => {}}
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
