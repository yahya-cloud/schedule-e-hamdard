import React, { useContext } from "react";
import { StyledBox, StyledNavLink } from "./styles";
import { UserContext } from "../../../contexts/userContext";
import UserContextType from "../../../@types/userContext";

type Props = {
  id: string;
};

const SectionNavbar = ({ id }: Props) => {
  const { user } = useContext(UserContext) as UserContextType;
  let userType = user?.user_type;

  return (
    <StyledBox component={"div"}>
      <StyledNavLink end to={`/${userType}/section/${id}`}>
        Schedule
      </StyledNavLink>
      <StyledNavLink end to={`/${userType}/section/${id}/teachers`}>
        Teachers
      </StyledNavLink>
      <StyledNavLink end to={`/${userType}/section/${id}/students`}>
        Students
      </StyledNavLink>
    </StyledBox>
  );
};

export default SectionNavbar;
