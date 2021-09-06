import * as categoriesController from "../controllers/categories.controller.js";

import { Router } from "express";

var router = Router();

router.post("/", categoriesController.create);

export default router;