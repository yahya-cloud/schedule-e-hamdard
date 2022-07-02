import React from "react";
import { Route, Routes } from "react-router-dom";
import Section from "../common_screens/Section/Section";
import AddTeacher from "./AddTeacher";
import Batch from "./Batch/Batch";
import Batches from "./Batches";
import Teachers from "./Teachers";
import IndividualTeacher from "./IndividualTeacher";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Batches />} />
      <Route path="/:id" element={<Batch />} />
      <Route path="/section/:id/*" element={<Section />} />
      <Route path="/teacher" element={<Teachers />} />
      <Route path="/teacher/addTeacher" element={<AddTeacher />} />
      <Route path="/teacher/:id" element={<IndividualTeacher />} />
    </Routes>
  );
};

export default AdminRoutes;
