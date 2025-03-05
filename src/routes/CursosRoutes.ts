import { Router } from "express";
import { CursosController } from "../controllers/CursosController";

const router = Router();

router.get("/", CursosController.getAll);
router.get("/:id", CursosController.getById);
router.post("/", CursosController.create);
router.put("/:id", CursosController.update);
router.delete("/:id", CursosController.delete);

export default router;