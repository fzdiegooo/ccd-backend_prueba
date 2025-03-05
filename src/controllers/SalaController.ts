import { Request, Response } from "express";
import { Sala } from "../models/Sala";

export class SalaController {
    static async getAll(req: Request, res: Response) {
        try {
            const salas = await Sala.findAll();
            res.json(salas);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener las salas" });
        }
    }

    static async getById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const sala = await Sala.findByPk(id);
            if (!sala) return res.status(404).json({ error: "Sala no encontrada" });
            res.json(sala);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener la sala" });
        }
    }

    static async create(req: Request, res: Response) {
        try {
            const nuevaSala = await Sala.create(req.body);
            res.status(201).json(nuevaSala);
        } catch (error) {
            res.status(500).json({ error: "Error al crear la sala" });
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const sala = await Sala.findByPk(id);
            if (!sala) return res.status(404).json({ error: "Sala no encontrada" });

            await sala.update(req.body);
            res.json(sala);
        } catch (error) {
            res.status(500).json({ error: "Error al actualizar la sala" });
        }
    }

    static async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const sala = await Sala.findByPk(id);
            if (!sala) return res.status(404).json({ error: "Sala no encontrada" });

            await sala.destroy();
            res.json({ message: "Sala eliminada correctamente" });
        } catch (error) {
            res.status(500).json({ error: "Error al eliminar la sala" });
        }
    }
}