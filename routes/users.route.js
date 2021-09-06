import * as usersController from "../controllers/users.controller.js";

import { Router } from "express";

var router = Router();

router.post("/register", usersController.register);
router.post("/login", usersController.login);

export default router;