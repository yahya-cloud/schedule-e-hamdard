import React, { useContext } from "react";
import logo from "../../../assets/images/logo.png";
import { Box, Paper, Stack } from "@mui/material";
import { StyledImg, StyledLogoutButton } from "./styles";
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

const Navbar = () => {
	const { logout, user } = useContext(UserContext) as UserContextType;
	const navigate = useNavigate();

	let navItemsData = {
		admin: [
			{ icon: <PeopleIcon />, path: `${rootRoute.admin}/` },
			{ icon: <AccountBalanceIcon />, path: `${rootRoute.admin}/teacher` },
		],
		teacher: [
			{ icon: <WidgetsIcon />, path: `${rootRoute.teacher}` },
			{
				icon: <CalendarMonthIcon />,
				path: `${rootRoute.teacher}/schedule`,
			},
		],
		student: [
			{
				icon: <CalendarMonthIcon />,
				//@ts-ignore
				path: `${rootRoute.student}/${user.section}`,
			},
		],
	};

	let logoutHandler = async () => {
		await logout();
		navigate("/login");
	};

	return (
		<Paper
			elevation={4}
			sx={{
				overflow: "hidden",
				width: 110,
				height: "100vh",
				marginRight: "40px",
				position: "fixed",
			}}
		>
			<Stack
				flexDirection={"column"}
				alignItems="center"
				justifyContent={"space-between"}
			>
				<StyledImg src={logo} alt="logo" />
				<Box
					component={"div"}
					sx={{
						height: "300px",
						width: "100%",
						display: "flex",
						alignItems: "center",
						flexDirection: "column",
						justifyContent: "center",
						flexShrink: 0,
					}}
				>
					{/* @ts-ignore */}
					{navItemsData[user.user_type].map((el) => (
						<NavItem key={el.path} path={el.path}>
							{el.icon}
						</NavItem>
					))}
				</Box>
			</Stack>
			<StyledLogoutButton>
				<LogoutIcon
					onClick={logoutHandler}
					sx={{ color: "#fff", height: "50px", width: "50px" }}
				/>
			</StyledLogoutButton>
		</Paper>
	);
};

export default Navbar;
