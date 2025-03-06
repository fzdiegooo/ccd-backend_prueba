import { Router } from "express";
import { EvaluacionController } from "../controllers/EvaluacionController";

const router = Router();

router.get("/", EvaluacionController.getAll);
//router.get("/:id", EvaluacionController.getById);
router.post("/", EvaluacionController.create);
router.put("/:id", EvaluacionController.update);
router.delete("/:id", EvaluacionController.delete);

export default router;