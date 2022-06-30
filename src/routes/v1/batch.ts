import { Router } from "express";
import { batch } from "../../controllers";

const router = Router();

router.get("/", batch.getBatches);
router.get("/:id", batch.getBatch);
router.post("/", batch.createBatch);
router.post("/addSection", batch.addSection);
router.delete("/removeAll", batch.removeAll);

export default router;
