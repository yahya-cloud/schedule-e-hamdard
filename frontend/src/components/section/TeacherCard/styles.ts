import { Box, Paper } from "@mui/material";
import { styled, experimental_sx as sx } from "@mui/system";

export const StyledPaperContainer = styled(Paper)(
  sx({
    boxSizing: "border-box",
    position: "relative",
    borderRadius: "1.6rem",
    height: "19rem",
    padding: "4rem 3rem",
  }),
);

export const StyledColorBox = styled(Box)(
  sx({
    borderRadius: "1.6rem 0 1.6rem 0",
    height: "2.5rem",
    width: "4.5rem",
    position: "absolute",
    top: 0,
    left: 0,
  }),
);

export const StyledImageBox = styled(Box)(
  sx({
    height: "10rem",
    width: "10rem",
    borderRadius: "50%",
    border: "1px solid green",
    backgroundSize: "contain",
    backgroundColor: "#ebebeb",
  }),
) as typeof Box;

export const StyledActionContainer = styled(Box)(
  sx({
    display: "flex",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 15,
    right: 20,
    height: "2rem",
    width: "5rem",
  }),
) as typeof Box;
