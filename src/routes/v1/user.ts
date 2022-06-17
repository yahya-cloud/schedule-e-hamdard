import { Router } from "express";
import {
  getUsers,
  createMany,
  removeAll,
  login,
  logout,
} from "../../controllers/user";

const router = Router();

router.get("/", getUsers);
router.post("/login", login);
router.get("/logout", logout);
router.post("/createMany", createMany);
router.delete("/removeAll", removeAll);

export default router;
