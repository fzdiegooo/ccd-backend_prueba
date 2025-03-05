import { Router } from "express";
import { ModalidadController } from "../controllers/ModalidadController";

const router = Router();

router.get("/", ModalidadController.getAll);
router.get("/:id", ModalidadController.getById);
router.post("/", ModalidadController.create);
router.put("/:id", ModalidadController.update);
router.delete("/:id", ModalidadController.delete);

export default router;