import { Router } from "express";
import * as student from "../../controllers/student";

const router = Router();

router.get("/", student.getStudents);
router.get("/:id", student.getStudent);
router.post("/", student.createStudent);
router.post("/createMany", student.createMany);
router.patch("/edit", student.editStudent);
router.delete("/removeAll", student.removeAll);
router.delete("/:id", student.removeStudent);

export default router;
