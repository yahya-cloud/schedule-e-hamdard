import React from "react";
import { Grid, Typography, Paper } from "@mui/material";
import { SectionType } from "../../../@types/global";

interface Props {
	sections: SectionType[] | null | undefined;
}

const SectionAlloted = (props: Props) => {
	return (
		<Grid item md={8}>
			<Typography sx={{ mb: 2, color: "#848484" }} variant="h5">
				Section Alloted
			</Typography>
			<Paper
				sx={{
					border: "1px solid #43B47C",
					width: "100%",
					height: "15rem",
					boxSizing: "border-box",
					padding: "2rem",
				}}
				elevation={2}
			>
				<Grid container spacing={3}>
					{props.sections?.map((el) => {
						return (
							<Grid item md={4}>
								<Typography
									variant="h6"
									align="center"
									sx={{
										borderRadius: "8px",
										padding: "1rem",
										border: "1px solid #43B47C",
										color: "#43B47C",
									}}
									component="div"
								>
									{el.info.section_name.toUpperCase()}-{el.info.batch_name}
								</Typography>
							</Grid>
						);
					})}
				</Grid>
			</Paper>
		</Grid>
	);
};

export default SectionAlloted;
