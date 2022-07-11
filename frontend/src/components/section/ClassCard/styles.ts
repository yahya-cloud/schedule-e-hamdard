import { Paper } from "@mui/material";
import { styled, experimental_sx as sx } from "@mui/system";

export const StyledPaper = styled(Paper)(
  sx({
    position: "relative",
    boxShadow: "none",
    width: "26rem",
    minHeight: "7rem",
    mt: 3,
    padding: "1.5rem 1rem 0rem 1rem",
  }),
) as typeof Paper;
