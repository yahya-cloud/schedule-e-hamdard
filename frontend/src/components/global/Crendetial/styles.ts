import { Box } from "@mui/material";
import { styled, experimental_sx as sx } from "@mui/system";

export const StyledBox = styled(Box)(
  sx({
    width: "60%",
    margin: "0 auto",
    height: "max-content",
    backgroundColor: "#f9f9f9",
    padding: ".5rem 1rem",
    boxSizing: "border-box",
    borderRadius: "8px",
  }),
);
