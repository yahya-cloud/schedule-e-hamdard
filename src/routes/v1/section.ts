import { Router } from "express";
import { section } from "../../controllers";

const router = Router();

router.get("/", section.getSections);
router.get("/:id", section.getSection);
router.post("/", section.createSection);
router.post("/createMany", section.createMany);
router.patch("/addTeacher", section.addTeacher);
router.patch("/removeTeacher", section.removeTeacher);
router.patch("/addClass", section.addClass);
router.patch("/removeClass", section.removeClass);
router.delete("/removeAll", section.removeAll);

export default router;
