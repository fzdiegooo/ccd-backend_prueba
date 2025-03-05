import { Router } from "express";
import { SalaController } from "../controllers/SalaController";

const router = Router();

router.get("/", SalaController.getAll);
router.get("/:id", SalaController.getById);
router.post("/", SalaController.create);
router.put("/:id", SalaController.update);
router.delete("/:id", SalaController.delete);

export default router;