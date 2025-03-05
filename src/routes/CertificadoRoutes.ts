import { Router } from "express";
import { CertificadoController } from "../controllers/CertificadoController";

const router = Router();

router.get("/", CertificadoController.getAll);
router.get("/:id", CertificadoController.getById);
router.post("/", CertificadoController.create);
router.put("/:id", CertificadoController.update);
router.delete("/:id", CertificadoController.delete);

export default router;
