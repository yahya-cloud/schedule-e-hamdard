import React, { useContext } from "react";
import { Paper, Stack, Typography } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, SchemaOf, date } from "yup";
import { useForm } from "react-hook-form";
import { DateSelect, TimeSelect } from "../../global/Inputs";
import Button from "../../global/Button";
import { SectionContextType } from "../../../@types/global";
import { SectionContext } from "../../../contexts/sectionContext";
import CancelIcon from "@mui/icons-material/Cancel";

interface IFormInput {
	date: Date;
	start: Date;
	end: Date;
}

let schema: SchemaOf<IFormInput> = object({
	date: date().required(),
	start: date().required(),
	end: date().required(),
});

interface Props {
	handleClose: () => void;
}

const AddClassForm = ({ handleClose }: Props) => {
	const { addClass } = useContext(SectionContext) as SectionContextType;
	const { handleSubmit, control } = useForm<IFormInput>({
		resolver: yupResolver(schema),
	});

	const onSubmit = async (data: IFormInput) => {
		let { start, end, date } = data;
		start.setMonth(date.getMonth(), date.getDate());
		end.setMonth(date.getMonth(), date.getDate());
		let payload = { start, end };
		await addClass(payload);
		handleClose();
	};

	return (
		<Paper
			sx={{
				height: "min-content",
				width: 350,
				margin: "200px",
				position: "absolute",
				right: "-120px",
				padding: "5px 10px 10px 20px",
			}}
			elevation={3}
			component="form"
		>
			<CancelIcon
				color="error"
				onClick={handleClose}
				style={{
					cursor: "pointer",
					position: "absolute",
					right: "4px",
					top: "3px",
				}}
			/>
			<Stack
				height={300}
				flexDirection={"column"}
				alignItems="flex-start"
				justifyContent="space-around"
			>
				<Typography align="center" variant="h3" fontWeight={300}>
					Add Class
				</Typography>
				<DateSelect
					fullWidth={true}
					helperText="Field is Required"
					type="text"
					control={control}
					inputStyles={{ width: "90%" }}
					name={"date"}
					label="Select Date"
				/>
				<TimeSelect
					fullWidth={true}
					helperText="Field is Required"
					type="text"
					control={control}
					inputStyles={{ width: "90%" }}
					name={"start"}
					label="Start Time"
				/>
				<TimeSelect
					fullWidth={true}
					helperText="Field is Required"
					type="text"
					control={control}
					inputStyles={{ width: "90%" }}
					name={"end"}
					label="End Time"
				/>
				<Button
					customStyles={{ marginTop: "1rem" }}
					onClick={handleSubmit(onSubmit)}
					variant="contained"
					color="primary"
					text="Add Class"
				/>
			</Stack>
		</Paper>
	);
};

export default AddClassForm;
