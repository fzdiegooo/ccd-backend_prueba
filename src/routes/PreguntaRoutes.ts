import { Router } from "express";
import { PreguntaController } from "../controllers/PreguntaController";

const router = Router();

router.get("/", PreguntaController.getAll);
router.get("/:id", PreguntaController.getById);
router.post("/", PreguntaController.create);
router.put("/:id", PreguntaController.update);
router.delete("/:id", PreguntaController.delete);

export default router;