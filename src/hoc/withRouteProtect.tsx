import React, { useContext } from "react";
import UserContextType from "../@types/userContext";
import { UserContext } from "../contexts/userContext";

interface Props {
  routeFor: string;
  Children: JSX.Element;
}

const WithRouteProtect = ({ Children, routeFor }: Props) => {
  const { user } = useContext(UserContext) as UserContextType;
  if (user?.user_type === routeFor) {
    return <>{Children} </>;
  } else {
    <></>;
  }
};

export default WithRouteProtect;
