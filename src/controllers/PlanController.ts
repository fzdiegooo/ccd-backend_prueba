import { Request, Response } from "express";
import { Plan } from "../models/Plan";

export class PlanController {
    static async getAll(req: Request, res: Response) {
        try {
            const planes = await Plan.findAll();
            res.json(planes);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener los planes" });
        }
    }

    static async getById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const plan = await Plan.findByPk(id);
            if (!plan) return res.status(404).json({ error: "Plan no encontrado" });
            res.json(plan);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener el plan" });
        }
    }

    static async create(req: Request, res: Response) {
        try {
            const nuevoPlan = await Plan.create(req.body);
            res.status(201).json(nuevoPlan);
        } catch (error) {
            res.status(500).json({ error: "Error al crear el plan" });
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const plan = await Plan.findByPk(id);
            if (!plan) return res.status(404).json({ error: "Plan no encontrado" });

            await plan.update(req.body);
            res.json(plan);
        } catch (error) {
            res.status(500).json({ error: "Error al actualizar el plan" });
        }
    }

    static async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const plan = await Plan.findByPk(id);
            if (!plan) return res.status(404).json({ error: "Plan no encontrado" });

            await plan.destroy();
            res.json({ message: "Plan eliminado correctamente" });
        } catch (error) {
            res.status(500).json({ error: "Error al eliminar el plan" });
        }
    }
}