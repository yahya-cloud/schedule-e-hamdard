import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import { TextField } from "@mui/material";
import { experimental_sx as sx } from "@mui/system";

const StyledTextField = styled(TextField)(
	sx({
		"& label": {
			fontSize: "12px",
		},
		"& .MuiOutlinedInput-root": {
			"&:hover fieldset": {
				borderColor: "#43B47C",
			},
		},
	}),
);

const StyledFormInput = styled(InputBase)({
	"label + &": {
		marginTop: "20px",
	},

	"& .MuiInputBase-input": {
		border: "1px solid #333",
		borderRadius: 8,
		position: "relative",
		// border: '1px solid #b0b0b0',
		fontSize: 14,
		padding: ".9rem 1.2rem",
		color: "#333",
		"::placeholder": {
			color: "#aaa",
			opacity: 1,
		},
	},
	"& .MuiInputBase-inputMultiline": {
		padding: "15px 12px 12px 12px",
	},
});

const StyledInputLabel = styled(InputLabel)({
	color: "#b0b0b0",
	fontSize: "18px",
	fontWeight: 700,
	letterSpacing: "1px",
	"&.Mui-focused": {
		color: "#b0b0b0",
	},
});

export { StyledFormInput, StyledInputLabel, StyledTextField };
