import { styled, experimental_sx as sx } from "@mui/system";
import Button from "@mui/material/Button";

export const StyledButton = styled(Button)(
  sx({
    textTransform: "none",
    borderRadius: 2,
    fontSize: { md: "1.6rem", xs: "1.2rem" },
    height: "40px",
    lineHeight: 1,
  }),
);
