import { Router } from "express";
import { TipoEvaluacionController } from "../controllers/TipoEvaluacionController";

const router = Router();

router.get("/", TipoEvaluacionController.getAll);
router.get("/:id", TipoEvaluacionController.getById);
router.post("/", TipoEvaluacionController.create);
router.put("/:id", TipoEvaluacionController.update);
router.delete("/:id", TipoEvaluacionController.delete);

export default router;