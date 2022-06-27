import { styled, experimental_sx as sx } from "@mui/system";
import { NavLink } from "react-router-dom";

const StyledImg = styled("img")(
  sx({
    height: "90px",
    width: "90px",
  })
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
  })
);

export { StyledImg, StyledNavLink };
