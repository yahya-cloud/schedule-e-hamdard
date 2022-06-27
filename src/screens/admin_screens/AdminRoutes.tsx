import React from "react";
import { Route, Routes } from "react-router-dom";
import Section from "../common_screens/Section/Section";
import Batch from "./Batch/Batch";
import Batches from "./Batches/Batches";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Batches />} />
      <Route path="/:id" element={<Batch />} />
      <Route path="/section/:id/*" element={<Section />} />
    </Routes>
  );
};

export default AdminRoutes;
