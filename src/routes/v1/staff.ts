import { Router } from "express";
import * as staff from "../../controllers/staff";

const router = Router();

router.get("/", staff.getStaff);
router.get("/:id", staff.getStaffMember);
router.post("/", staff.createStaff);
router.post("/", staff.createStaff);
router.post("/createMany", staff.createMany);
router.patch("/edit", staff.editStaffMember);
router.delete("/removeAll", staff.removeAll);
router.delete("/:id", staff.removeStaffMember);

export default router;
