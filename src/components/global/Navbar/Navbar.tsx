import React from "react";
import logo from "../../../assets/images/logo.png";
import { Box, Paper, Stack } from "@mui/material";
import { StyledImg } from "./styles";
import NavItem from "./NavItem";
import PeopleIcon from "@mui/icons-material/People";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

let navItemsData = {
  admin: [
    { icon: <PeopleIcon />, path: "/" },
    { icon: <AccountBalanceIcon />, path: "/teachers" },
  ],
};

interface Props {
  userType: string;
}

const Navbar = ({ userType }: Props) => {
  return (
    <Paper
      elevation={4}
      sx={{
        overflow: "hidden",
        width: 110,
        height: "100vh",
        marginRight: "40px",
      }}>
      <Stack flexDirection={"column"} alignItems="center">
        <StyledImg src={logo} alt="logo" />
        <Box
          component={"div"}
          sx={{
            height: "300px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            flexShrink: 0,
          }}>
          {/* @ts-ignore */}
          {navItemsData[userType].map((el) => (
            <NavItem key={el.path} path={el.path}>
              {el.icon}
            </NavItem>
          ))}
        </Box>
      </Stack>
    </Paper>
  );
};

export default Navbar;
