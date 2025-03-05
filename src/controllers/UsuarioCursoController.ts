import { Request, Response } from "express";
import { UsuarioCurso } from "../models/UsuarioCurso";

export class UsuarioCursoController {
    static async getAll(req: Request, res: Response) {
        try {
            const usuarioCursos = await UsuarioCurso.findAll();
            res.json(usuarioCursos);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener las relaciones Usuario-Curso" });
        }
    }

    static async getById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const usuarioCurso = await UsuarioCurso.findByPk(id);
            if (!usuarioCurso) return res.status(404).json({ error: "Relación Usuario-Curso no encontrada" });
            res.json(usuarioCurso);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener la relación Usuario-Curso" });
        }
    }

    static async create(req: Request, res: Response) {
        try {
            const nuevaRelacion = await UsuarioCurso.create(req.body);
            res.status(201).json(nuevaRelacion);
        } catch (error) {
            res.status(500).json({ error: "Error al crear la relación Usuario-Curso" });
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const usuarioCurso = await UsuarioCurso.findByPk(id);
            if (!usuarioCurso) return res.status(404).json({ error: "Relación Usuario-Curso no encontrada" });

            await usuarioCurso.update(req.body);
            res.json(usuarioCurso);
        } catch (error) {
            res.status(500).json({ error: "Error al actualizar la relación Usuario-Curso" });
        }
    }

    static async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const usuarioCurso = await UsuarioCurso.findByPk(id);
            if (!usuarioCurso) return res.status(404).json({ error: "Relación Usuario-Curso no encontrada" });

            await usuarioCurso.destroy();
            res.json({ message: "Relación Usuario-Curso eliminada correctamente" });
        } catch (error) {
            res.status(500).json({ error: "Error al eliminar la relación Usuario-Curso" });
        }
    }
}
