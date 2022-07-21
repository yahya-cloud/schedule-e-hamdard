import React, { useRef } from "react";
import { StyledNavLink } from "./styles";

interface Props {
  children: React.ReactNode;
  path: string;
}

const NavItem = ({ children, path }: Props) => {
  const navItem = useRef<HTMLAnchorElement | null>(null);

  return (
    <>
      <StyledNavLink
        end
        className={(navData) => (navData.isActive ? "active" : "")}
        ref={navItem}
        to={path}
      >
        {children}
      </StyledNavLink>
    </>
  );
};

export default NavItem;
