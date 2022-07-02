import { Stack, Box, Typography } from "@mui/material";
import React from "react";

let data = [
	{ heading: "Admin", id: "yahya49939", password: "D3GD8" },
	{ heading: "Teacher", id: "aida61634", password: "2A424" },
	{ heading: "Student", id: "2019-310-115", password: "FAF68" },
];

const Credential = () => {
	return (
		<Box
			sx={{
				width: "60%",
				margin: "0 auto",
				height: "max-content",
				backgroundColor: "#f9f9f9",
				padding: ".5rem 1rem",
				boxSizing: "border-box",
				borderRadius: "8px",
			}}
		>
			{data.map((el) => {
				return (
					<Stack
						sx={{ color: "#333", mb: 1 }}
						key={el.id}
						justifyContent={"center"}
						flexDirection={"row"}
					>
						<Typography variant="h5" fontWeight={30}>
							{el.heading}:
						</Typography>
						<Typography sx={{ ml: 1 }} variant="h6">
							{el.id},
						</Typography>
						<Typography sx={{ ml: 1 }} variant="h6">
							{el.password}
						</Typography>
					</Stack>
				);
			})}
		</Box>
	);
};

export default Credential;
