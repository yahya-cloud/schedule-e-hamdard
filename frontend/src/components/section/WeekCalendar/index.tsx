import React, { useEffect, useRef } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import timeGridPlugin from "@fullcalendar/timegrid";
import moment from "moment";
import CalendarEvent from "../CalendarEvent";
import { TimeTableType } from "../../../@types/global";
import { StyledBox } from "./styles";

type Props = {
  selectedDate: Date;
  classes: TimeTableType[] | undefined;
};

const WeekCalendar = ({ selectedDate, classes }: Props) => {
  const calendarRef = useRef<FullCalendar>(null!);

  useEffect(() => {
    let calendarApi = calendarRef.current.getApi();
    calendarApi.gotoDate(selectedDate);
  }, [selectedDate]);

  return (
    <StyledBox component={"div"}>
      <FullCalendar
        ref={calendarRef}
        expandRows={true}
        plugins={[timeGridPlugin]}
        initialView="timeGridWeek"
        slotMinTime={"08:00:00"}
        slotMaxTime={"19:00:00"}
        headerToolbar={{
          start: "title prev next", // will normally be on the left. if RTL, will be on the right
          center: "",
          end: "timeGridWeek timeGridDay", // will normally be on the right. if RTL, will be on the left
        }}
        allDaySlot={false}
        titleFormat={{ year: "numeric", month: "long" }}
        dayHeaderContent={(args) => {
          return (
            <div className="header-content">
              <h4>{moment(args.date).format("ddd")}</h4>
              <h5>{moment(args.date).format("D")}</h5>
            </div>
          );
        }}
        eventContent={(arg) => <CalendarEvent arg={arg} />}
        events={classes ? [...classes] : []}
      />
    </StyledBox>
  );
};

export default WeekCalendar;
