import { Router } from "express";
import { NivelController } from "../controllers/NivelController";

const router = Router();

router.get("/", NivelController.getAll);
router.get("/:id", NivelController.getById);
router.post("/", NivelController.create);
router.put("/:id", NivelController.update);
router.delete("/:id", NivelController.delete);

export default router;