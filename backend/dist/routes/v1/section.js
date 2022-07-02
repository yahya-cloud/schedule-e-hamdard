"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../../controllers");
const router = (0, express_1.Router)();
router.get("/", controllers_1.section.getSections);
router.get("/assignedSections", controllers_1.section.getAssignedSections);
router.get("/:id", controllers_1.section.getSection);
router.post("/", controllers_1.section.createSection);
router.post("/createMany", controllers_1.section.createMany);
router.patch("/addTeacher", controllers_1.section.addTeacher);
router.patch("/removeTeacher", controllers_1.section.removeTeacher);
router.patch("/addClass", controllers_1.section.addClass);
router.patch("/removeClass", controllers_1.section.removeClass);
router.delete("/removeAll", controllers_1.section.removeAll);
exports.default = router;
