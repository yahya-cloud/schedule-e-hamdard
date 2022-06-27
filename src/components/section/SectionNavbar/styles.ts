import { styled, experimental_sx as sx } from "@mui/system";
import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink)(
  sx({
    fontSize: "2.4rem",
    textDecoration: "none",
    fontFamily: "lato",
    fontWeight: 600,
    color: "#6D6D6D",
    borderBottom: "2px solid transparent",
    transition: "all .2s ease",
    "&:hover, &.active": {
      color: "#43B47C",
      borderColor: "#43B47C",
    },
    "&:hover svg, &.active svg": {
      color: "#fff",
    },
  })
);

export { StyledNavLink };
