import * as categoriesController from "../controllers/categories.controller.js";
import { Router } from "express";

const router = Router();

router.get("/", categoriesController.getAll);

router.get("/:categoryId", categoriesController.get);

router.post("/", categoriesController.create);

router.put("/:categoryId", categoriesController.update);

router.delete("/:categoryId", categoriesController.remove);

export default router;