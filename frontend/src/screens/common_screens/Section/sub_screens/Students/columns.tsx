//@ts-noCheck
import { Stack } from "@mui/material";
import React from "react";
import { GridColDef } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const columns = (
	userType: string | undefined,
	deleteStudent: (studentId: string) => Promise<void>,
): GridColDef[] => {
	let password = {
		field: "password",
		headerName: "Password",
		type: "number",
		minWidth: 170,
		flex: 1,
		headerAlign: "center",
		align: "center",
	};
	let action = {
		field: "action",
		headerName: "Action",
		sortable: false,
		minWidth: 170,
		flex: 1,
		headerAlign: "center",
		align: "center",
		renderCell: (params) => {
			return (
				<Stack flexDirection="row">
					<EditIcon
						sx={{
							cursor: "pointer",
							color: "#43B47C",
							fontSize: "2rem",
						}}
					/>
					<DeleteIcon
						onClick={() => deleteStudent(params.row._id)}
						color={"error"}
						sx={{ cursor: "pointer", fontSize: "2rem" }}
					/>
				</Stack>
			);
		},
	};

	return [
		{
			field: "id",
			headerName: "SN.",
			minWidth: 90,
			maxWidth: 90,
			flex: 1,
			headerAlign: "center",
			align: "center",
		},
		{
			field: "name",
			headerName: "Name",
			minWidth: 150,
			flex: 1,
			headerAlign: "center",
			align: "center",
		},
		{
			field: "email",
			headerName: "Email",
			minWidth: 170,
			flex: 1,
			headerAlign: "center",
			align: "center",
		},
		{
			field: "phone_number",
			headerName: "Phone Number",
			type: "string",
			minWidth: 170,
			flex: 1,
			headerAlign: "center",
			align: "center",
		},
		{
			field: "en_number",
			headerName: "Enrollment Number",
			type: "string",
			minWidth: 170,
			flex: 1,
			headerAlign: "center",
			align: "center",
		},

		...(userType === "admin" ? [password, action] : []),
	];
};

export default columns;
