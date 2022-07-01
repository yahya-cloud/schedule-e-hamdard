import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import UserContextType from "../@types/userContext";
import { UserContext } from "../contexts/userContext";
import LayoutContainer from "../screens/LayoutContainer";

interface ProtectedRouteProps {
  routeFor: string;
}

const ProtectedRoute = ({ routeFor }: ProtectedRouteProps) => {
  const { user } = useContext(UserContext) as UserContextType;
  if (user.user_type === routeFor) {
    return (
      <React.Fragment>
        <LayoutContainer>
          <Outlet />
        </LayoutContainer>
      </React.Fragment>
    );
  } else {
    return <></>;
  }
};

export default ProtectedRoute;
