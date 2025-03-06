import { Request, Response } from "express";
import { Curso } from "../models/Cursos/Curso";
import { Modalidad } from "../models/Cursos/Modalidad";

export class CursosController {
  static async getAll(req: Request, res: Response) {
    try {
      const cursos = await Curso.findAll();
      return res.json(cursos);
    } catch (error) {
      return res.status(500).json({ error: "Error al obtener cursos" });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const curso = await Curso.findByPk(req.params.id);
      if (!curso) {
        return res.status(404).json({ error: "Curso no encontrado" });
      }
      return res.json(curso);
    } catch (error) {
      return res.status(500).json({ error: "Error al obtener el curso" });
    }
  }

  static async create(req: Request, res: Response) {
    try {
      const curso = await Curso.create(req.body);
      return res.status(201).json(curso);
    } catch (error) {
      return res.status(500).json({ error: "Error al crear el curso" });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const curso = await Curso.findByPk(req.params.id);
      if (!curso) {
        return res.status(404).json({ error: "Curso no encontrado" });
      }

      await curso.update(req.body);
      return res.json(curso);
    } catch (error) {
      return res.status(500).json({ error: "Error al actualizar el curso" });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const curso = await Curso.findByPk(req.params.id);
      if (!curso) {
        return res.status(404).json({ error: "Curso no encontrado" });
      }

      await curso.destroy();
      return res.json({ message: "Curso eliminado" });
    } catch (error) {
      return res.status(500).json({ error: "Error al eliminar el curso" });
    }
  }
}
