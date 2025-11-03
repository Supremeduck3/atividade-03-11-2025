import { Router } from "express";
import * as funkoControllers from "./../controllers/funkoControllers.js";

const router = Router();

router.get("/", funkoControllers.listarTodos);
router.get("/:id", funkoControllers.listarUm);

export default router;