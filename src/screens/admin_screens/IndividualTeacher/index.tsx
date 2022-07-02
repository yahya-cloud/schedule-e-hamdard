import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../components/global/Button";
import Teacher from "../../common_screens/Teacher";
import { rootRoute } from "../../../config.keys";

const IndividualTeacher = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	return (
		<Box component="div">
			<Stack width="100%" justifyContent={"space-between"} flexDirection="row">
				<Typography variant="h3">Teacher Details</Typography>
				<Button
					onClick={() => {
						navigate(`${rootRoute.admin}/teacher`);
					}}
					variant="outlined"
					color="fifth"
					text="All Teachers"
				/>
			</Stack>
			{id && <Teacher id={id} />}
		</Box>
	);
};

export default IndividualTeacher;
