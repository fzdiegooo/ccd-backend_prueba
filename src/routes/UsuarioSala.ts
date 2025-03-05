import { Router } from "express";
import { UsuarioSalaController } from "../controllers/UsuarioSalaController";

const router = Router();

router.get("/", UsuarioSalaController.getAll);
router.get("/:id", UsuarioSalaController.getById);
router.post("/", UsuarioSalaController.create);
router.put("/:id", UsuarioSalaController.update);
router.delete("/:id", UsuarioSalaController.delete);

export default router;