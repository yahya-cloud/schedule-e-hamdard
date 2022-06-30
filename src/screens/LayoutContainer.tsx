import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../components/global/Navbar/Navbar";

interface Props {
  children: React.ReactNode;
}

//need one function to push people to desired route
const LayoutContainer = ({ children }: Props) => {
  console.log("ran layout");
  return (
    <Box sx={{ display: "flex", position: "relative" }} component={"div"}>
      <Navbar />
      <Box
        sx={{
          minWidth: "130rem",
          maxWidth: "130rem",
          margin: "5rem 0px 0px 15rem",
          flex: 1,
        }}>
        {children}
      </Box>
    </Box>
  );
};

export default LayoutContainer;
