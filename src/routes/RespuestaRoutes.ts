import { Router } from "express";
import { RespuestaController } from "../controllers/RespuestaController";

const router = Router();

router.get("/", RespuestaController.getAll);
router.get("/:id", RespuestaController.getById);
router.post("/", RespuestaController.create);
router.put("/:id", RespuestaController.update);
router.delete("/:id", RespuestaController.delete);

export default router;