import { Router } from "express";
import { PlanController } from "../controllers/PlanController";

const router = Router();

router.get("/", PlanController.getAll);
router.get("/:id", PlanController.getById);
router.post("/", PlanController.create);
router.put("/:id", PlanController.update);
router.delete("/:id", PlanController.delete);

export default router;