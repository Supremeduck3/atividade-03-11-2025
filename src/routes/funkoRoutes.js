import { Router } from "express";
import * as funkoControllers from "./../controllers/funkoControllers.js";

const router = Router();

router.get("/", funkoControllers.listarTodos);
router.get("/:id", funkoControllers.listarUm);
router.post("/", funkoControllers.criar);
router.delete("/:id", funkoControllers.deletar);
router.put("/:id", funkoControllers.atualizar);

export default router;