import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { experimental_sx as sx } from "@mui/system";

const StyledBox = styled(Box)(
  sx({
    minWidth: "140rem",
    maxWidth: "140rem",
    margin: "5rem 0px 0px 15rem",
    flex: 1,
  }),
);

export { StyledBox };
