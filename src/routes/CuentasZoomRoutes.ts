import { Router } from "express";
import { CuentasZoomController } from "../controllers/CuentasZoomController";

const router = Router();

router.get("/", CuentasZoomController.getAll);
router.get("/:id", CuentasZoomController.getById);
router.post("/", CuentasZoomController.create);
router.put("/:id", CuentasZoomController.update);
router.delete("/:id", CuentasZoomController.delete);

export default router;