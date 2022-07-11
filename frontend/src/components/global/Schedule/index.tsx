import { Box, Divider, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { SectionContextType, TimeTableType } from "../../../@types/global";
import { getDayClasses } from "../../../lib/section";
import WeekCalendar from "../../section/WeekCalendar";
import ClassCard from "../../section/ClassCard";
import { StyledPaper, StyledStack } from "./styles";
import { SectionContext } from "../../../contexts/sectionContext";

type Props = {
  timeTable: TimeTableType[];
};

const Schedule = (props: Props) => {
  const [date, setDate] = useState<Date>(new Date());
  const [classes, setClasses] = useState<TimeTableType[]>([]);
  const [dayClasses, setDayClasses] = useState<TimeTableType[]>([]);
  const { removeClass } = useContext(SectionContext) as SectionContextType;

  useEffect(() => {
    if (props.timeTable) {
      let dayClass = getDayClasses(date, props.timeTable) as TimeTableType[];
      setDayClasses(dayClass);
      setClasses(props.timeTable);
    }
  }, [date, props.timeTable]);

  useEffect(() => {
    if (classes.length > 0) {
      let dayClass = getDayClasses(date, classes) as TimeTableType[];
      setDayClasses(dayClass);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  return (
    <StyledPaper elevation={3} component={"div"}>
      <Stack flexDirection={"row"} sx={{ height: "100%" }}>
        <WeekCalendar classes={classes} selectedDate={date} />
        <StyledStack alignItems={"center"}>
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
              {dayClasses.map((el) => (
                <ClassCard
                  color={el.subject_color}
                  start={el.start}
                  end={el.end}
                  title={el.title}
                  description={el.description}
                  key={el._id}
                  deleteClass={() => {
                    removeClass(el._id);
                  }}
                />
              ))}
            </Stack>
          </Box>
        </StyledStack>
      </Stack>
    </StyledPaper>
  );
};

export default Schedule;
