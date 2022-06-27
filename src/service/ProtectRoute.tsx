import React from "react";
import { Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  userType: string;
  routeFor: string;
  children: React.ReactNode;
}

const ProtectedRoute = ({
  userType,
  routeFor,
  children,
}: ProtectedRouteProps) => {
  if (userType === routeFor) {
    return <React.Fragment>{children}</React.Fragment>;
  } else {
    return <></>;
  }
};

export default ProtectedRoute;
