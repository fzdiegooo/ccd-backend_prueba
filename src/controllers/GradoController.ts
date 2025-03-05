import { Request, Response } from "express";
import { Grado } from "../models/Grado";

export class GradoController {
    static async getAll(req: Request, res: Response) {
        try {
            const grados = await Grado.findAll();
            res.json(grados);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener los grados" });
        }
    }

    static async getById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const grado = await Grado.findByPk(id);
            if (!grado) return res.status(404).json({ error: "Grado no encontrado" });
            res.json(grado);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener el grado" });
        }
    }

    static async create(req: Request, res: Response) {
        try {
            const nuevoGrado = await Grado.create(req.body);
            res.status(201).json(nuevoGrado);
        } catch (error) {
            res.status(500).json({ error: "Error al crear el grado" });
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const grado = await Grado.findByPk(id);
            if (!grado) return res.status(404).json({ error: "Grado no encontrado" });

            await grado.update(req.body);
            res.json(grado);
        } catch (error) {
            res.status(500).json({ error: "Error al actualizar el grado" });
        }
    }

    static async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const grado = await Grado.findByPk(id);
            if (!grado) return res.status(404).json({ error: "Grado no encontrado" });

            await grado.destroy();
            res.json({ message: "Grado eliminado correctamente" });
        } catch (error) {
            res.status(500).json({ error: "Error al eliminar el grado" });
        }
    }
}