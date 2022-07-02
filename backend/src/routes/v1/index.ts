import { Express } from "express";
import sectionRoutes from "./section";
import staffRoutes from "./staff";
import studentRoutes from "./student";
import userRoutes from "./user";
import batchRoutes from "./batch";

function useRoutes(app: Express) {
  app.use("/v1/batch", batchRoutes);
  app.use("/v1/section", sectionRoutes);
  app.use("/v1/staff", staffRoutes);
  app.use("/v1/student", studentRoutes);
  app.use("/v1/user", userRoutes);
}

export default useRoutes;
