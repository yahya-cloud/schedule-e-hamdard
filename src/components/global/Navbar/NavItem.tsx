import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { styled, experimental_sx as sx } from "@mui/system";
import { StyledNavLink } from "./styles";
import { ConnectingAirportsOutlined } from "@mui/icons-material";

interface Props {
  children: React.ReactNode;
  path: string;
}

const NavItem = ({ children, path }: Props) => {
  return (
    <>
      <StyledNavLink to={path}>{children}</StyledNavLink>{" "}
    </>
  );
};

export default NavItem;
