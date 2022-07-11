import { Paper } from "@mui/material";
import { styled, experimental_sx as sx } from "@mui/system";

export const BatchPaper = styled(Paper)(
  sx({
    border: `2px solid primary.main`,
    height: "min-content",
    width: "35rem",
    margin: "10rem auto",
    padding: "1rem 3rem ",
    position: "relative",
  }),
) as typeof Paper;

export const LoginPaper = styled(Paper)(
  sx({
    borderRadius: "1.6rem",
    height: "min-content",
    width: 450,
    margin: "200px auto",
    padding: "20px 10px",
  }),
) as typeof Paper;

export const LoginContainer = styled(Paper)(
  sx({
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#43b47c",
  }),
);
