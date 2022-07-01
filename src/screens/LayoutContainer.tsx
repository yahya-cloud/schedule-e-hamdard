import React from "react";
import { Box } from "@mui/material";
import Navbar from "../components/global/Navbar/Navbar";
import Loader from "../components/global/Loader";

interface Props {
  children: React.ReactNode;
}

const LayoutContainer = ({ children }: Props) => {
  return (
    <Box sx={{ display: "flex", position: "relative" }} component={"div"}>
      <Loader />
      <Navbar />
      <Box
        sx={{
          minWidth: "140rem",
          maxWidth: "140rem",
          margin: "5rem 0px 0px 15rem",
          flex: 1,
        }}>
        {children}
      </Box>
    </Box>
  );
};

export default LayoutContainer;
