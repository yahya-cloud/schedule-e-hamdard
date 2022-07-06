import React, { useContext, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { LoginForm } from "../components/global/Forms";
import AdminRoutes from "./admin_screens/AdminRoutes";
import TeacherRoutes from "./teacher_screens/TeacherRoutes";
import UserContextType from "../@types/userContext";
import { UserContext } from "../contexts/userContext";
import { userRootPath } from "../lib/utils";
import StudentRoutes from "./student_screens/StudentRoutes";
import { rootRoute } from "../config.keys";
import ProtectRoute from "../components/global/ProtectRoute";

const RoutingContainer = () => {
  const { user } = useContext(UserContext) as UserContextType;
  const navigate = useNavigate();

  useEffect(() => {
    if (user.user_type !== "") {
      let rootPath = userRootPath(user);
      navigate(rootPath);
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />

      <Route element={<ProtectRoute routeFor="admin" />}>
        <Route path={`${rootRoute.admin}/*`} element={<AdminRoutes />} />
      </Route>

      <Route element={<ProtectRoute routeFor="teacher" />}>
        <Route path={`${rootRoute.teacher}/*`} element={<TeacherRoutes />} />
      </Route>

      <Route element={<ProtectRoute routeFor="student" />}>
        <Route path={`${rootRoute.student}/*`} element={<StudentRoutes />} />
      </Route>
    </Routes>
  );
};

export default RoutingContainer;
