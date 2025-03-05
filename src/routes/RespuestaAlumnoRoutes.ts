import { Router } from "express";
import { RespuestaAlumnoController } from "../controllers/RespuestaAlumnoController";

const router = Router();

router.get("/", RespuestaAlumnoController.getAll);
router.get("/:id", RespuestaAlumnoController.getById);
router.post("/", RespuestaAlumnoController.create);
router.put("/:id", RespuestaAlumnoController.update);
router.delete("/:id", RespuestaAlumnoController.delete);

export default router;