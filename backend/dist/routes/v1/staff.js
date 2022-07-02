"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../../controllers");
const router = (0, express_1.Router)();
router.get("/", controllers_1.staff.getStaff);
router.get("/:id", controllers_1.staff.getStaffMember);
router.post("/", controllers_1.staff.createStaff);
router.post("/", controllers_1.staff.createStaff);
router.post("/createMany", controllers_1.staff.createMany);
router.patch("/edit", controllers_1.staff.editStaffMember);
router.delete("/removeAll", controllers_1.staff.removeAll);
router.delete("/:id", controllers_1.staff.removeStaffMember);
exports.default = router;
