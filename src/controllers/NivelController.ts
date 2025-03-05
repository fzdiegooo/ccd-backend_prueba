import { Request, Response } from "express";
import { Nivel } from "../models/Nivel";

export class NivelController {
    static async getAll(req: Request, res: Response) {
        try {
            const niveles = await Nivel.findAll();
            res.json(niveles);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener los niveles" });
        }
    }

    static async getById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const nivel = await Nivel.findByPk(id);
            if (!nivel) return res.status(404).json({ error: "Nivel no encontrado" });
            res.json(nivel);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener el nivel" });
        }
    }

    static async create(req: Request, res: Response) {
        try {
            const nuevoNivel = await Nivel.create(req.body);
            res.status(201).json(nuevoNivel);
        } catch (error) {
            res.status(500).json({ error: "Error al crear el nivel" });
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const nivel = await Nivel.findByPk(id);
            if (!nivel) return res.status(404).json({ error: "Nivel no encontrado" });

            await nivel.update(req.body);
            res.json(nivel);
        } catch (error) {
            res.status(500).json({ error: "Error al actualizar el nivel" });
        }
    }

    static async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const nivel = await Nivel.findByPk(id);
            if (!nivel) return res.status(404).json({ error: "Nivel no encontrado" });

            await nivel.destroy();
            res.json({ message: "Nivel eliminado correctamente" });
        } catch (error) {
            res.status(500).json({ error: "Error al eliminar el nivel" });
        }
    }
}