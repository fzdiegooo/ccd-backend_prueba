import { Router } from "express";
import { UsuarioCursoController } from "../controllers/UsuarioCursoController";

const router = Router();

router.get("/", UsuarioCursoController.getAll);
router.get("/:id", UsuarioCursoController.getById);
router.post("/", UsuarioCursoController.create);
router.put("/:id", UsuarioCursoController.update);
router.delete("/:id", UsuarioCursoController.delete);

export default router;