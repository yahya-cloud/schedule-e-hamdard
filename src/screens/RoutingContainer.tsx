import React, { useContext, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { LoginForm } from "../components/global/Forms";
import ProtectRoute from "../service/ProtectRoute";
import AdminRoutes from "./admin_screens/AdminRoutes";
import TeacherRoutes from "./teacher_screens/TeacherRoutes";
import UserContextType, { UserType } from "../@types/userContext";
import { UserContext } from "../contexts/userContext";
import { userRootPath } from "../lib/utils";

const RoutingContainer = () => {
  const { makeApiCall, user, setUser } = useContext(
    UserContext
  ) as UserContextType;
  const navigate = useNavigate();

  useEffect(() => {
    if (user.user_type === "") {
      async function getUser() {
        const fetchedUser = (await makeApiCall(
          "/user/getUser",
          {},
          "get"
        )) as UserType;
        if (fetchedUser) {
          setUser(fetchedUser);
          let rootPath = userRootPath(fetchedUser.user_type);
          navigate(rootPath);
        } else {
          navigate("/login");
        }
      }
      getUser();
    }
  }, [user]);

  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />

      <Route element={<ProtectRoute routeFor="admin" />}>
        <Route path="/admin*" element={<AdminRoutes />} />
      </Route>

      {/* <Route element={<ProtectRoute routeFor="teacher" />}>
        <TeacherRoutes />
      </Route> */}
    </Routes>
  );
};

export default RoutingContainer;
