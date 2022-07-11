import React, { useContext } from "react";
import logo from "../../../assets/images/logo.png";
import { Stack } from "@mui/material";
import {
  StyledImg,
  StyledLogoutButton,
  StyledNavBox,
  StyledPaper,
} from "./styles";
import NavItem from "./NavItem";
import PeopleIcon from "@mui/icons-material/People";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LogoutIcon from "@mui/icons-material/Logout";
import { UserContext } from "../../../contexts/userContext";
import UserContextType from "../../../@types/userContext";
import WidgetsIcon from "@mui/icons-material/Widgets";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useNavigate } from "react-router-dom";
import { rootRoute } from "../../../config.keys";

type data = { icon: React.ReactNode; path: string };
type navData = {
  admin: data[];
  teacher: data[];
  student: data[];
};

const Navbar = () => {
  const { logout, user } = useContext(UserContext) as UserContextType;
  const navigate = useNavigate();

  let navItemsData: navData = {
    admin: [
      { icon: <PeopleIcon />, path: `${rootRoute.admin}/` },
      { icon: <AccountBalanceIcon />, path: `${rootRoute.admin}/teacher` },
    ],
    teacher: [
      { icon: <WidgetsIcon />, path: `${rootRoute.teacher}/` },
      {
        icon: <CalendarMonthIcon />,
        path: `${rootRoute.teacher}/schedule`,
      },
    ],
    student: [
      {
        icon: <CalendarMonthIcon />,
        path: `${rootRoute.student}/${user?.section}`,
      },
    ],
  };

  let logoutHandler = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <StyledPaper elevation={4}>
      <Stack
        flexDirection={"column"}
        alignItems="center"
        justifyContent={"space-between"}
      >
        <StyledImg src={logo} alt="logo" />
        <StyledNavBox component={"div"}>
          {user &&
            navItemsData[user.user_type].map((el) => (
              <NavItem key={el.path} path={el.path}>
                {el.icon}
              </NavItem>
            ))}
        </StyledNavBox>
      </Stack>
      <StyledLogoutButton>
        <LogoutIcon
          onClick={logoutHandler}
          sx={{ color: "#fff", height: "50px", width: "50px" }}
        />
      </StyledLogoutButton>
    </StyledPaper>
  );
};

export default Navbar;
