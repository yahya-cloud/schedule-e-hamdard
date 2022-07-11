import { Box, Paper, Typography } from "@mui/material";
import { styled, experimental_sx as sx } from "@mui/system";

export const StyledImageBox = styled(Box)(
  sx({
    backgroundColor: "#ebebeb",
    minWidth: "25rem",
    height: "25rem",
    borderRadius: "50%",
    backgroundSize: "contain",
  }),
) as typeof Box;

export const StyledInfoBox = styled(Box)(
  sx({
    height: "40rem",
    position: "relative",
    width: "100%",
    padding: ".5rem 0px 0px 4rem",
  }),
) as typeof Box;

export const SectionAllotedContainer = styled(Paper)(
  sx({
    border: "1px solid #43B47C",
    width: "100%",
    height: "15rem",
    boxSizing: "border-box",
    padding: "2rem",
  }),
) as typeof Paper;

export const StyledTypography = styled(Typography)(
  sx({
    borderRadius: "8px",
    padding: "1rem",
    border: "1px solid #43B47C",
    color: "#43B47C",
  }),
) as typeof Typography;
