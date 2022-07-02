import React from "react";
import { Box } from "@mui/material";
import Navbar from "../Navbar";
import Loader from "../Loader";
import Message from "../Message";

interface Props {
  children: React.ReactNode;
}

const LayoutContainer = ({ children }: Props) => {
  return (
    <Box sx={{ display: "flex", position: "relative" }} component={"div"}>
      <Message />
      <Loader />
      <Navbar />
      <Box
        sx={{
          minWidth: "140rem",
          maxWidth: "140rem",
          margin: "5rem 0px 0px 15rem",
          flex: 1,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default LayoutContainer;
