import { Router } from "express";
import { EvaluacionPreguntaController } from "../controllers/EvaluacionPreguntaController";

const router = Router();

router.get("/", EvaluacionPreguntaController.getAll);
router.get("/:id", EvaluacionPreguntaController.getById);
router.post("/", EvaluacionPreguntaController.create);
router.put("/:id", EvaluacionPreguntaController.update);
router.delete("/:id", EvaluacionPreguntaController.delete);

export default router;