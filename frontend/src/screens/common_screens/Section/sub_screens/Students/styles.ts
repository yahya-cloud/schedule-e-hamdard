import { Box } from "@mui/material";
import { styled, experimental_sx as sx } from "@mui/system";

export const StyledBox = styled(Box)(
  sx({
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    width: "110rem",
  }),
) as typeof Box;
