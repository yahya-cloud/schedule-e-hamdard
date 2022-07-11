import React from "react";
import { Box } from "@mui/material";
import Navbar from "../Navbar";
import Loader from "../Loader";
import Message from "../Message";
import { StyledBox } from "./styles";

type Props = {
  children: React.ReactNode;
};

const LayoutContainer = ({ children }: Props) => {
  return (
    <Box sx={{ display: "flex", position: "relative" }} component={"div"}>
      <Message />
      <Loader />
      <Navbar />
      <StyledBox>{children}</StyledBox>
    </Box>
  );
};

export default LayoutContainer;
