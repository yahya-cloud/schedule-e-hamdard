import { Box, Grid } from "@mui/material";
import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { SectionContextType } from "../@types/global";
import UserContextType from "../@types/userContext";
import { LoginForm } from "../components/global/Forms";
import Navbar from "../components/global/Navbar/Navbar";
import { SectionContext } from "../contexts/sectionContext";
import { UserContext } from "../contexts/userContext";
import ProtectRoute from "../service/ProtectRoute";
import AdminRoutes from "./admin_screens/AdminRoutes";

//need one function to push people to desired route
const LayoutContainer = () => {
  const { user, makeApiCall } = useContext(UserContext) as UserContextType;
  const { section } = useContext(SectionContext) as SectionContextType;

  const logout = async () => {
    await makeApiCall("/user/logout", {}, "get");
  };

  return (
    <>
      <ProtectRoute userType={user?.user_type} routeFor="admin">
        <Box sx={{ display: "flex" }} component={"div"}>
          <Navbar userType={user?.user_type} />
          <Box sx={{ maxWidth: '140rem', marginTop: "50px", flex: 1 }}>
            <AdminRoutes />
          </Box>
        </Box>
      </ProtectRoute>

      <button onClick={logout}>logout</button>
      <Routes>
        <Route path="/" element={user ? <></> : <LoginForm />} />
      </Routes>
    </>
  );
};

export default LayoutContainer;
