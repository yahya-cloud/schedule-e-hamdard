import React from "react";
import { Route, Routes } from "react-router-dom";
import Section from "../common_screens/Section/Section";
import AssignedSections from "./AssignedSections";
import Profile from "./Profile";

const TeacherRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AssignedSections />} />
      <Route path="/section/:id/*" element={<Section />} />
      <Route path="/schedule" element={<Profile />} />
    </Routes>
  );
};

export default TeacherRoutes;
