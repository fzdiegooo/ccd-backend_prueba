import { Router } from "express";
import { RolesController } from "../controllers/RolesController";

const router = Router();

router.get("/", RolesController.getAll);
router.get("/:id", RolesController.getById);
router.post("/", RolesController.create);
router.put("/:id", RolesController.update);
router.delete("/:id", RolesController.delete);

export default router;