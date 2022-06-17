import { Router } from "express";
import {
  addSection,
  createBatch,
  getBatches,
  removeAll,
} from "../../controllers/batch";

const router = Router();

router.get("/", getBatches);
router.post("/", createBatch);
router.post("/addSection", addSection);
router.delete("/removeAll", removeAll);

export default router;
