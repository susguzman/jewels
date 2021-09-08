import * as jewelsController from "../controllers/jewels.controller.js";
import { Router } from "express";

const router = Router();

router.get("/", jewelsController.getAll);

router.get("/:jewelId", jewelsController.get);

router.post("/", jewelsController.create);

router.put("/:jewelId", jewelsController.update);

router.delete("/:jewelId", jewelsController.remove);

export default router;