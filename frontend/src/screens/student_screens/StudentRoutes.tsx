import React from "react";
import { Route, Routes } from "react-router-dom";
import Section from "../common_screens/Section/Section";

const StudentRoutes = () => {
  return (
    <Routes>
      <Route path="/:id/*" element={<Section />} />
    </Routes>
  );
};

export default StudentRoutes;
