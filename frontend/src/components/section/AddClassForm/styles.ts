import { Paper } from "@mui/material";
import { styled, experimental_sx as sx } from "@mui/system";

export const StyledPaper = styled(Paper)(
  sx({
    height: "min-content",
    width: 350,
    margin: "200px",
    position: "absolute",
    right: "-120px",
    padding: "5px 10px 10px 20px",
  }),
) as typeof Paper;
