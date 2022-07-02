import { Box, Typography, Grid, Stack } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { SectionType } from "../../../@types/global";
import UserContextType from "../../../@types/userContext";
import { UserContext } from "../../../contexts/userContext";
import Card from "../../../components/global/Card";
import { ReactComponent as BoxIcon } from "../../../assets/svg/boxIcon.svg";
import { SearchInput } from "../../../components/global/Inputs";
import useSearchFilter from "../../../hooks/useSearchFilter";

const AssignedSections = () => {
	const { makeApiCall } = useContext(UserContext) as UserContextType;
	const [sections, setSections] = useState<SectionType[]>([]);
	const [value, setValue, filteredData] = useSearchFilter(sections, [
		"info.section_name",
		"info.batch_name",
	]);

	console.log(sections);

	useEffect(() => {
		async function getSections() {
			let fetchedSections = (await makeApiCall(
				"/section/assignedSections",
				{},
				"get",
			)) as SectionType[];
			setSections([...fetchedSections]);
		}
		getSections();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Box component="div">
			<Typography variant="h2" sx={{ mb: 5 }}>
				Assigned Sections
			</Typography>
			<Stack direction={"row"} sx={{ marginBottom: "4rem" }}>
				<SearchInput
					type="text"
					label="Search Section"
					name="search-section"
					inputStyles={{ width: "25rem", marginRight: "2rem" }}
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
			</Stack>{" "}
			<Grid wrap="wrap" rowSpacing={7} container>
				{filteredData?.map((el) => (
					<Grid key={el._id} item lg={3} md={4} sm={6} xs={12}>
						<Card
							color="#F7F59F"
							path={`/teacher/section/${el._id}`}
							name={`${
								el.info.batch_name
							}-Section-${el.info.section_name.toUpperCase()}`}
						>
							<BoxIcon
								style={{ height: "30px", width: "30px", color: "#FFD965" }}
							/>
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default AssignedSections;
