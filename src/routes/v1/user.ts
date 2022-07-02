import { Router } from "express";
import { user } from "../../controllers";

const router = Router();

router.get("/", user.getUsers);
router.get("/getUser", user.getUserWithToken);
router.post("/login", user.login);
router.post("/createMany", user.createMany);
router.get("/logout", user.logout);
router.delete("/removeAll", user.removeAll);

export default router;
