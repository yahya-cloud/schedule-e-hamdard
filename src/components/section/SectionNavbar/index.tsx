import React, { useContext } from "react";
import { Box } from "@mui/material";
import { StyledNavLink } from "./styles";
import { useLocation } from "react-router-dom";
import { UserContext } from "../../../contexts/userContext";
import UserContextType from "../../../@types/userContext";

interface Props {
  id: string;
}

const SectionNavbar = ({ id }: Props) => {
  const { user } = useContext(UserContext) as UserContextType;
  let userType = user?.user_type;
  console.log(userType);

  return (
    <Box
      component={"div"}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "50rem",
      }}>
      <StyledNavLink end to={`/${userType}/section/${id}`}>
        Schedule
      </StyledNavLink>
      <StyledNavLink end to={`/${userType}/section/${id}/teachers`}>
        Teachers
      </StyledNavLink>
      <StyledNavLink end to={`/${userType}/section/${id}/students`}>
        Students
      </StyledNavLink>
    </Box>
  );
};

export default SectionNavbar;
