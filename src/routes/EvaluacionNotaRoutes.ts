import { Router } from "express";
import { EvaluacionNotaController } from "../controllers/EvaluacionNotaController";

const router = Router();

router.get("/", EvaluacionNotaController.getAll);
router.get("/:id", EvaluacionNotaController.getById);
router.post("/", EvaluacionNotaController.create);
router.put("/:id", EvaluacionNotaController.update);
router.delete("/:id", EvaluacionNotaController.delete);

export default router;