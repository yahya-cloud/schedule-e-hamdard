import { Paper, Stack } from "@mui/material";
import { styled, experimental_sx as sx } from "@mui/system";

export const StyledPaper = styled(Paper)(
  sx({
    height: "800px",
    borderRadius: "16px",
    border: `1px solid #98D698`,
  }),
) as typeof Paper;

export const StyledStack = styled(Stack)(
  sx({
    borderRadius: "1.6rem",
    flex: 1,
    flexShrink: 0,
    height: "100%",
    border: `1px solid #98D698`,
  }),
) as typeof Stack;
