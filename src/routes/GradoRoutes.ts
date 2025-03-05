import { Router } from "express";
import { GradoController } from "../controllers/GradoController";

const router = Router();

router.get("/", GradoController.getAll);
router.get("/:id", GradoController.getById);
router.post("/", GradoController.create);
router.put("/:id", GradoController.update);
router.delete("/:id", GradoController.delete);

export default router;