import { Box } from "@mui/material";
import { styled, experimental_sx as sx } from "@mui/system";

export const StyledBox = styled(Box)(
  sx({
    height: "100%",
    minWidth: "95rem",
    borderRadius: "16px",
    position: "relative",
    padding: "2rem 0rem",
    overflowY: "scroll",
  }),
);
