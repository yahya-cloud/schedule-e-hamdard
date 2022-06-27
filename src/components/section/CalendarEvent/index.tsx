import React from "react";
import { EventContentArg } from "@fullcalendar/react";
import { Stack, Typography } from "@mui/material";
import { getRGBA } from "../../../utils/section";

interface Props {
  arg: EventContentArg;
}

const CalendarEvent = ({ arg }: Props) => {
  let color = arg.event.extendedProps.subject_color;
  let backgroundColor = getRGBA(color);

  return (
    <Stack
      sx={{
        padding: "1rem .3rem",
        backgroundColor: `${backgroundColor}`,
        border: `1px solid ${color}`,
        color: `${color}`,
      }}
      component={"div"}>
      <Typography variant="h5">{arg.event._def.title}</Typography>
      <Typography sx={{ mt: 0.3 }} variant="subtitle1">
        {arg.event.extendedProps.description}
      </Typography>
      <Typography variant="h6">{arg.timeText}</Typography>
    </Stack>
  );
};

export default CalendarEvent;
