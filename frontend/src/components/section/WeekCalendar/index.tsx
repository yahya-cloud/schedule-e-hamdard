import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import timeGridPlugin from "@fullcalendar/timegrid";
import moment from "moment";
import CalendarEvent from "../CalendarEvent";
import { TimeTableType } from "../../../@types/global";

interface Props {
	selectedDate: Date;
	classes: TimeTableType[] | undefined;
}

const WeekCalendar = ({ selectedDate, classes }: Props) => {
	// let date = new Date();
	// let startDate = new Date(date.getTime() + 2 * 60 * 60 * 1000);
	// let endDate = new Date(date.getTime() + 3 * 60 * 60 * 1000);

	const calendarRef = useRef<FullCalendar>(null!);

	useEffect(() => {
		let calendarApi = calendarRef.current.getApi();
		calendarApi.gotoDate(selectedDate);
	}, [selectedDate]);

	return (
		<Box
			component={"div"}
			sx={{
				height: "100%",
				minWidth: "95rem",
				borderRadius: "16px",
				position: "relative",
				padding: "2rem 0rem",
				overflowY: "scroll",
			}}
		>
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
				// dayHeaderFormat={{ weekday: "short" }}
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
		</Box>
	);
};

export default WeekCalendar;
