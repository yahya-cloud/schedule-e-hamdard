import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { experimental_sx as sx } from "@mui/system";

const StyledBox = styled(Box)(
  sx({
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    "&:focus-visible": { outline: "none" },
  }),
);

export { StyledBox };
