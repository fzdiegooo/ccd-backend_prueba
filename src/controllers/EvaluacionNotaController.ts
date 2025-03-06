import { Request, Response } from "express";
import { EvaluacionNota } from "../models/Evaluacion/EvaluacionNota";

export class EvaluacionNotaController {
  static async getAll(req: Request, res: Response) {
    try {
      const notas = await EvaluacionNota.findAll();
      return res.json(notas);
    } catch (error: any) {
      return res.status(500).json({ error: `Error al obtener las notas de evaluación: ${error.message}` });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id || isNaN(Number(id))) {
        return res.status(400).json({ error: "ID inválido" });
      }

      const nota = await EvaluacionNota.findByPk(id);
      if (!nota) {
        return res.status(404).json({ error: "Nota de evaluación no encontrada" });
      }

      return res.json(nota);
    } catch (error: any) {
      return res.status(500).json({ error: `Error al obtener la nota de evaluación: ${error.message}` });
    }
  }

  static async create(req: Request, res: Response) {
    try {
      if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ error: "Datos inválidos" });
      }

      const nota = await EvaluacionNota.create(req.body);
      return res.status(201).json(nota);
    } catch (error: any) {
      return res.status(500).json({ error: `Error al crear la nota de evaluación: ${error.message}` });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id || isNaN(Number(id))) {
        return res.status(400).json({ error: "ID inválido" });
      }

      if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ error: "Datos inválidos" });
      }

      const nota = await EvaluacionNota.findByPk(id);
      if (!nota) {
        return res.status(404).json({ error: "Nota de evaluación no encontrada" });
      }

      await nota.update(req.body);
      return res.json(nota);
    } catch (error: any) {
      return res.status(500).json({ error: `Error al actualizar la nota de evaluación: ${error.message}` });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id || isNaN(Number(id))) {
        return res.status(400).json({ error: "ID inválido" });
      }

      const nota = await EvaluacionNota.findByPk(id);
      if (!nota) {
        return res.status(404).json({ error: "Nota de evaluación no encontrada" });
      }

      await nota.destroy();
      return res.json({ message: "Nota de evaluación eliminada" });
    } catch (error: any) {
      return res.status(500).json({ error: `Error al eliminar la nota de evaluación: ${error.message}` });
    }
  }
}
