import React from "react";
import { Paper, Stack, Typography, useTheme } from "@mui/material";
import FormInput from "../Inputs/FormInput";
import Button from "../Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, SchemaOf, string } from "yup";
import { useForm } from "react-hook-form";
import { RequestBodyType } from "../../../@types/global";
import CancelIcon from "@mui/icons-material/Cancel";

interface IFormInput {
	name: string;
}

interface Props {
	heading: string;
	handleClose: () => void;
	addBatchHandler: (dataObj: RequestBodyType) => Promise<void>;
}

let schema: SchemaOf<IFormInput> = object({
	name: string().required(),
});

const AddBatchForm = ({ addBatchHandler, handleClose, heading }: Props) => {
	const theme = useTheme();
	const { handleSubmit, control } = useForm<IFormInput>({
		resolver: yupResolver(schema),
	});

	const onSubmit = async (dataObj: RequestBodyType) => {
		await addBatchHandler(dataObj);
	};

	return (
		<Paper
			sx={{
				border: `2px solid ${theme.palette.primary.main}`,
				height: "min-content",
				width: "35rem",
				margin: "10rem auto",
				padding: "1rem 3rem ",
				position: "relative",
			}}
			elevation={3}
			component="form"
		>
			<CancelIcon
				onClick={handleClose}
				style={{
					cursor: "pointer",
					color: "red",
					position: "absolute",
					right: "4px",
					top: "3px",
				}}
			/>
			<Stack
				height={"18rem"}
				flexDirection={"column"}
				alignItems="flex-start"
				justifyContent="space-around"
			>
				<Typography align="left" variant="h4" fontWeight={500}>
					{heading}
				</Typography>
				<FormInput
					fullWidth={true}
					helperText="Field is Required"
					type="text"
					control={control}
					inputStyles={{ width: "100%" }}
					name={"name"}
					label="Name"
				/>

				<Button
					customStyles={{ width: "20px!important", alignSelf: "flex-end" }}
					onClick={handleSubmit(onSubmit)}
					variant="contained"
					color="primary"
					text="Add New"
				/>
			</Stack>
		</Paper>
	);
};

export default AddBatchForm;
