import { Box, Paper } from "@mui/material";
import { styled, experimental_sx as sx } from "@mui/system";
import { NavLink } from "react-router-dom";

const StyledPaper = styled(Paper)(
  sx({
    overflow: "hidden",
    width: 110,
    height: "100vh",
    marginRight: "40px",
    position: "fixed",
    zIndex: 10,
  }),
);

const StyledImg = styled("img")(
  sx({
    height: "90px",
    width: "90px",
  }),
);

const StyledNavLink = styled(NavLink)(
  sx({
    width: "100%",
    height: "80px",
    color: "#43B47C",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #ccc",
    transition: "all .2s ease",
    "& svg": { color: "inherit", height: "50px", width: "50px" },
    "&:hover, &.active": {
      backgroundColor: "#43B47C",
    },
    "&:hover svg, &.active svg": {
      color: "#fff",
    },
    "&.bitches": {
      backgroundColor: "red",
    },
  }),
);

const StyledLogoutButton = styled(Box)(
  sx({
    bottom: 0,
    position: "absolute",
    height: "80px",
    width: "100%",
    backgroundColor: "rgba(255, 100, 100, .6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all .2s ease",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(255, 100, 100, 1)",
    },
  }),
);

const StyledNavBox = styled(Box)(
  sx({
    height: "300px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    flexShrink: 0,
  }),
) as typeof Box;

export {
  StyledPaper,
  StyledNavBox,
  StyledImg,
  StyledNavLink,
  StyledLogoutButton,
};
