import React, { useContext, useEffect, useState } from "react";
import { Snackbar, Alert } from "@mui/material";
import UserContextType from "../../../@types/userContext";
import { UserContext } from "../../../contexts/userContext";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Message = () => {
	const { message } = useContext(UserContext) as UserContextType;
	const [open, setOpen] = useState<boolean>(false);

	useEffect(() => {
		if (message.message !== "") {
			setOpen(true);
		}
	}, [message]);

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Snackbar
			sx={{ width: "35rem" }}
			open={message.message !== "" && open}
			autoHideDuration={5000}
			onClose={handleClose}
		>
			<Alert
				sx={{
					fontSize: "1.5rem",
					width: "100%",
					"& .MuiAlert-icon": { fontSize: "2.5rem" },
				}}
				variant="standard"
				onClose={handleClose}
				severity={message.severity}
			>
				{message.message}
			</Alert>
		</Snackbar>
	);
};

export default Message;
