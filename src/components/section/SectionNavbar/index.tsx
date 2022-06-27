import React from "react";
import { Box } from "@mui/material";
import { StyledNavLink } from "./styles";

interface Props {
  id: string;
}

const SectionNavbar = ({ id }: Props) => {
  // const { pathname } = useLocation();

  return (
    <Box
      component={"div"}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "50rem",
      }}>
      <StyledNavLink end to={`/section/${id}`}>
        Schedule
      </StyledNavLink>
      <StyledNavLink end to={`/section/${id}/teachers`}>
        Teachers
      </StyledNavLink>
      <StyledNavLink end to={`/section/${id}/students`}>
        Students
      </StyledNavLink>
    </Box>
  );
};

export default SectionNavbar;
