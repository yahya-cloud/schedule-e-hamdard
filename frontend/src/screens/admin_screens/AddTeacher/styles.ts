import { Box } from "@mui/material";
import { styled, experimental_sx as sx } from "@mui/system";

export const StyledImageContainer = styled(Box)(
  sx({
    backgroundColor: "#ebebeb",
    minWidth: "25rem",
    height: "25rem",
    borderRadius: "50%",
  }),
) as typeof Box;

export const StyledForm = styled(Box)(
  sx({
    height: "40rem",
    position: "relative",
    width: "100%",
    padding: ".5rem 0px 0px 4rem",
  }),
) as typeof Box;
