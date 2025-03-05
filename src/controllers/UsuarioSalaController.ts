import { Request, Response } from "express";
import { UsuarioSala } from "../models/UsuarioSala";

export class UsuarioSalaController {
    static async getAll(req: Request, res: Response) {
        try {
            const usuarioSalas = await UsuarioSala.findAll();
            res.json(usuarioSalas);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener las relaciones Usuario-Sala" });
        }
    }

    static async getById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const usuarioSala = await UsuarioSala.findByPk(id);
            if (!usuarioSala) return res.status(404).json({ error: "Relación Usuario-Sala no encontrada" });
            res.json(usuarioSala);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener la relación Usuario-Sala" });
        }
    }

    static async create(req: Request, res: Response) {
        try {
            const nuevaRelacion = await UsuarioSala.create(req.body);
            res.status(201).json(nuevaRelacion);
        } catch (error) {
            res.status(500).json({ error: "Error al crear la relación Usuario-Sala" });
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const usuarioSala = await UsuarioSala.findByPk(id);
            if (!usuarioSala) return res.status(404).json({ error: "Relación Usuario-Sala no encontrada" });

            await usuarioSala.update(req.body);
            res.json(usuarioSala);
        } catch (error) {
            res.status(500).json({ error: "Error al actualizar la relación Usuario-Sala" });
        }
    }

    static async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const usuarioSala = await UsuarioSala.findByPk(id);
            if (!usuarioSala) return res.status(404).json({ error: "Relación Usuario-Sala no encontrada" });

            await usuarioSala.destroy();
            res.json({ message: "Relación Usuario-Sala eliminada correctamente" });
        } catch (error) {
            res.status(500).json({ error: "Error al eliminar la relación Usuario-Sala" });
        }
    }
}
